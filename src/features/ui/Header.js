import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from './Input';
import { fade, makeStyles } from "@material-ui/core/styles";

const TITLE = "Bitcoin Blockchain Explorer";

/**
 * Following code is taken from https://material-ui.com/ docs
 */

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  title: {
    cursor: "pointer"
  },
  toolbar: {
    justifyContent: "space-between"
  },
  actions: {
    display: "flex"
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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

          <div className={classes.actions}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input />
            </div>

            <Button color="inherit" onClick={() => history.push("/blocks")}>
              Blocks
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
