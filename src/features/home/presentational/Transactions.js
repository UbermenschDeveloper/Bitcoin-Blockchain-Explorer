import React from "react";
import PropTypes from "prop-types";
import Table from "../../ui/Table";
import Card from "../../ui/Card";

const HEAD_CELLS = ["Weight", "Time", "Hash"];
const TITLE = "Last 10 transactions";

const Transactions = ({ transactions }) => (
  <Card title={TITLE}>
    <Table headRow={HEAD_CELLS} bodyRows={transactions} />
  </Card>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      weight: PropTypes.number.isRequired,
      hash: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired
    }).isRequired
  )
};

export default Transactions;
