import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  fade,
  InputBase
} from "@material-ui/core";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";
import { connect } from "react-redux";

import MenuOption from "./MenuOption";
import SideBar from "./SideBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#fff", 0.15),
    "&:hover": {
      backgroundColor: fade("#fff", 0.25)
    },
    // Prevent expand to the end of screen width
    marginRight: theme.spacing(10),
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
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const LoginNavBar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = event => {
    setOpen(!open);
  };

  const renderAction = () => {
    return props.user ? (
      <React.Fragment>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <MenuOption />
      </React.Fragment>
    ) : null;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6">
            Home
          </Typography>
          {renderAction()}
        </Toolbar>
      </AppBar>

      <SideBar open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(LoginNavBar);
