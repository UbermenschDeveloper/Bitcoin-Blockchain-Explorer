import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const BlockLayout = ({ blockHeight, summary, hashes, transactions }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Block #{blockHeight}
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={6}>
        {summary}
      </Grid>
      <Grid item xs={6} sm={6}>
        {hashes}
      </Grid>
      <Grid item xs={12}>
        {transactions}
      </Grid>
    </Grid>
  </>
);

BlockLayout.propTypes = {
  blockHeight: PropTypes.number.isRequired,
  summary: PropTypes.node.isRequired,
  hashes: PropTypes.node.isRequired,
  transactions: PropTypes.node.isRequired,
};

export default BlockLayout;
