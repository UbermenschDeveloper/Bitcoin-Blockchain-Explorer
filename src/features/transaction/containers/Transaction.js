import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import TransactionLayout from "../components/TransactionLayout";
import TransactionDirection from "../components/TransactionDirection";
import TransactionSummary from "../components/TransactionSummary";
import Loader from "../../ui/Loader";
import { fetchTransaction } from '../../../actions/transaction';

const useTransaction = (hash) => {
  const dispatch = useDispatch();
  const transaction = useSelector(state => state.transaction);

  useEffect(() => {
    dispatch(fetchTransaction(hash));  
  }, [hash, dispatch]);

  return transaction;
};

const Transaction = ({match}) => {
  const {summary, direction} = useTransaction(match.params.hash);
  
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

export default withRouter(Transaction);
