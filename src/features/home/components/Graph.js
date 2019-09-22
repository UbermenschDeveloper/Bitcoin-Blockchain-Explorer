import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import Card from "../../ui/Card";

const TITLE = "Market Price (USD)";

// TODO use React.memo
const Graph = ({ data }) => (
  <Card title={TITLE}>
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="usd" stroke="#8884d8" />
    </LineChart>
  </Card>
);

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      usd: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Graph;
