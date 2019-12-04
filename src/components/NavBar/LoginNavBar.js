import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons/";

import MenuOption from "./MenuOption";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const LoginNavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6">
            Home
          </Typography>

          <MenuOption/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginNavBar;
