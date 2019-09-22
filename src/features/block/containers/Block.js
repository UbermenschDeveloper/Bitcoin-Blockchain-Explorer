import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import BlockLayout from "../components/BlockLayout";
import TransactionsPagination from "../components/TransactionsPagination";
import Hashes from "../components/Hashes";
import BlockSummary from "../components/BlockSummary";
import Loader from "../../ui/Loader";
import { BLOCK_MOCK } from "../../mocks/mocks";

const useBlock = () => {
  const dispatch = useDispatch();
  const block = useSelector(state => state.block);

  const mockedPayload = {
    transactions: BLOCK_MOCK.tx.map(({ weight, time, hash }) => ({
      weight,
      time,
      hash
    })),
    summary: {
      transactionsCount: BLOCK_MOCK.n_tx,
      bits: BLOCK_MOCK.bits,
      size: BLOCK_MOCK.size,
      fee: BLOCK_MOCK.fee,
      time: BLOCK_MOCK.time,
      height: BLOCK_MOCK.height,
      receivedTime: BLOCK_MOCK.received_time,
      relayedBy: BLOCK_MOCK.relayed_by
    },
    hashes: {
      hash: BLOCK_MOCK.hash,
      previousBlock: BLOCK_MOCK.prev_block,
      nextBlocks: BLOCK_MOCK.next_block,
      merkleRoot: BLOCK_MOCK.mrkl_root
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_BLOCK", payload: mockedPayload });
  }, []);

  return block;
};

const Block = ({ history }) => {
  const {transactions, summary, hashes} = useBlock();
  
  const handleTransactionClick = () => {
    history.push("/transaction");
  };

  if (!transactions || !summary || !hashes) return <Loader />;

  return (
    <BlockLayout
      blockHeight={summary.height}
      summary={<BlockSummary summary={summary} />}
      hashes={<Hashes hashes={hashes} />}
      transactions={
        <TransactionsPagination
          transactions={transactions}
          onTransactionClick={handleTransactionClick}
        />
      }
    />
  );
};

export default withRouter(Block);
