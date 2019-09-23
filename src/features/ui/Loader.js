import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * Following code is taken from https://material-ui.com/ docs
 */

const useStyles = makeStyles(theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.progress} >
      <CircularProgress />
    </div>
  );
}