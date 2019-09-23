import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TablePagination from "../../ui/TablePagination";

const HEAD_CELLS = ["Weight", "Time", "Hash"];
const TITLE = "Transactions";

const Transactions = ({ transactions, onTransactionClick }) => (
  <>
    <Typography variant="h5" gutterBottom>
      {TITLE}
    </Typography>
    <TablePagination
      bodyRows={transactions}
      headRow={HEAD_CELLS}
      onRowClick={onTransactionClick}
    />
  </>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      weight: PropTypes.number.isRequired,
      hash: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired
    }).isRequired
  ),
  onTransactionClick: PropTypes.func.isRequired
};

export default Transactions;
