import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import TransactionLayout from "../presentational/TransactionLayout";
import TransactionDirection from "../presentational/TransactionDirection";
import TransactionSummary from "../presentational/TransactionSummary";
import Loader from "../../ui/Loader";
import { fetchTransaction } from '../../../actions/transaction';

const useTransaction = (hash, dispatch) => {
  const transaction = useSelector(state => state.transaction);

  useEffect(() => {
    dispatch(fetchTransaction(hash));  
  }, [hash, dispatch]);

  return transaction;
};

const Transaction = ({match}) => {
  const {summary, direction} = useTransaction(match.params.hash, useDispatch());
  
  if (!summary || !direction) return <Loader />;

  return (
    <TransactionLayout
      transactionHash={summary.hash}
      direction={
        <TransactionDirection
          addresses={direction}
          transactionHash={summary.hash}
        />
      }
      summary={<TransactionSummary summary={summary} />}
    />
  );
};

Transaction.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      hash: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default withRouter(Transaction);
