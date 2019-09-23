import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const TransactionLayout = ({
  transactionHash,
  direction,
  summary,
}) => (
  <>
    <Typography variant="h4" gutterBottom noWrap>
      Transaction #{transactionHash}
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12}>
        {direction}
      </Grid>
      <Grid item xs={12} sm={6}>
        {summary}
      </Grid>
    </Grid>
  </>
);

TransactionLayout.propTypes = {
  transactionHash: PropTypes.string.isRequired,
  direction: PropTypes.node.isRequired,
  summary: PropTypes.node.isRequired,
};

export default TransactionLayout;
