import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TablePagination from "../ui/TablePagination";

const HEAD_CELLS = ["Height", "Hash", "Title"];
const TITLE = "Blocks";

const BlocksLayout = ({ blocks, onBlockClick }) => (
  <>
    <Typography variant="h4" gutterBottom>
      {TITLE}
    </Typography>

    <TablePagination
      headRow={HEAD_CELLS}
      bodyRows={blocks}
      onRowClick={onBlockClick}
    />
  </>
);

BlocksLayout.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      hash: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired
    }).isRequired
  ),
  onBlockClick: PropTypes.func.isRequired
};

export default BlocksLayout;
