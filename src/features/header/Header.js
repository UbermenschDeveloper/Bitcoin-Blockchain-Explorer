import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const TITLE = "Bitcoin Blockchain Explorer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  title: {
    cursor: "pointer",
  },
  toolbar: {
    justifyContent: "space-between",
  }
}));

const Header = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => history.push("/")}
          >
            {TITLE}
          </Typography>

          <Button color="inherit" onClick={() => history.push("/blocks")}>
            Blocks
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
