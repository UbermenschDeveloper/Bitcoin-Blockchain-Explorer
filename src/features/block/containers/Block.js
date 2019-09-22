import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BlockLayout from "../components/BlockLayout";
import TransactionsPagination from "../components/TransactionsPagination";
import Hashes from "../components/Hashes";
import BlockSummary from "../components/BlockSummary";
import { BLOCK_MOCK } from "../../mocks/mocks";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(
      BLOCK_MOCK.tx.map(({ weight, time, hash }) => ({
        weight,
        time,
        hash
      }))
    );
  }, []);

  return transactions;
};

const useSummary = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    setSummary({
      transactionsCount: BLOCK_MOCK.n_tx,
      bits: BLOCK_MOCK.bits,
      size: BLOCK_MOCK.size,
      fee: BLOCK_MOCK.fee,
      time: BLOCK_MOCK.time,
      height: BLOCK_MOCK.height,
      receivedTime: BLOCK_MOCK.received_time,
      relayedBy: BLOCK_MOCK.relayed_by
    });
  }, []);

  return summary;
};

const useHashes = () => {
  const [hashes, setHashes] = useState({});

  useEffect(() => {
    setHashes({
      hash: BLOCK_MOCK.hash,
      previousBlock: BLOCK_MOCK.prev_block,
      nextBlocks: BLOCK_MOCK.next_block,
      merkleRoot: BLOCK_MOCK.mrkl_root
    });
  }, []);

  return hashes;
};

const Block = ({ history }) => {
  const transactions = useTransactions();
  const summary = useSummary();
  const hashes = useHashes();

  const handleTransactionClick = () => {
    history.push("/transaction");
  };

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
