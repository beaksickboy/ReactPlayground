import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  IconButton,
  Popover,
  makeStyles,
  createStyles
} from "@material-ui/core";

import MenuOptionItems from "./MenuOptionItems";

const useStyles = makeStyles(theme =>
  createStyles({
    icon: {
      color: "white"
    }
  })
);

const MenuOption = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();


  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "center"
  };

  const transformOrigin = {
    vertical: "top",
    horizontal: "center"
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  // Help a List pop over Button
  return (
    <React.Fragment>
      <IconButton className={classes.icon} onClick={toggleMenu}>
        <ArrowDropDownIcon />
      </IconButton>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <MenuOptionItems />
      </Popover>
    </React.Fragment>
  );
};

export default MenuOption;
