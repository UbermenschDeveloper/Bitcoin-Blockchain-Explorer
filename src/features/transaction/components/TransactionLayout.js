import React from "react";
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

export default TransactionLayout;
