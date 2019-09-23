import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import BlockLayout from "../presentational/BlockLayout";
import Transactions from "../presentational/Transactions";
import Hashes from "../presentational/Hashes";
import BlockSummary from "../presentational/BlockSummary";
import Loader from "../../ui/Loader";
import { fetchBlock } from "../../../actions/block";

const useBlock = hash => {
  const dispatch = useDispatch();
  const block = useSelector(state => state.block);

  useEffect(() => {
    dispatch(fetchBlock(hash));
  }, [dispatch, hash]);

  return block;
};

const Block = ({ history, match }) => {
  const { transactions, summary, hashes } = useBlock(match.params.hash);

  const handleTransactionClick = ({ hash }) => {
    history.push(`/transaction/${hash}`);
  };

  if (!transactions || !summary || !hashes) return <Loader />;

  return (
    <BlockLayout
      blockHeight={summary.height}
      summary={<BlockSummary summary={summary} />}
      hashes={<Hashes hashes={hashes} />}
      transactions={
        <Transactions
          transactions={transactions}
          onTransactionClick={handleTransactionClick}
        />
      }
    />
  );
};

Block.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      hash: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default withRouter(Block);
