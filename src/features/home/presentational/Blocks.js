import React from "react";
import PropTypes from "prop-types";
import Table from "../../ui/Table";
import Card from "../../ui/Card";

const HEAD_CELLS = ["Height", "Time", "Hash"];
const TITLE = "Last 10 blocks";

const Blocks = ({ blocks }) => (
  <Card title={TITLE}>
    <Table headRow={HEAD_CELLS} bodyRows={blocks} />
  </Card>
);

Blocks.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      hash: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired
    }).isRequired
  )
};

export default Blocks;
