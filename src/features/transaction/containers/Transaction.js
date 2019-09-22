import React, { useState, useEffect } from "react";
import TransactionLayout from "../components/TransactionLayout";
import TransactionDirection from "../components/TransactionDirection";
import TransactionSummary from "../components/TransactionSummary";
import Loader from "../../ui/Loader";
import { SINGLE_TRANSACTION_MOCK } from "../../mocks/mocks";

const useDirection = () => {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    setDirection({
      addressesFrom: SINGLE_TRANSACTION_MOCK.inputs.map(input => ({
        address: input.prev_out.addr,
        value: input.prev_out.value
      })),
      addressesTo: SINGLE_TRANSACTION_MOCK.out.map(output => ({
        address: output.addr,
        value: output.value
      }))
    });
  }, []);

  return direction;
};

const useSummary = () => {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    setSummary({
      hash: SINGLE_TRANSACTION_MOCK.hash,
      size: SINGLE_TRANSACTION_MOCK.size,
      weight: SINGLE_TRANSACTION_MOCK.weight,
      receivingTime: new Date(
        SINGLE_TRANSACTION_MOCK.time * 1000
      ).toDateString()
    });
  }, []);

  return summary;
};

const Transaction = () => {
  const direction = useDirection();
  const summary = useSummary();

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

export default Transaction;
