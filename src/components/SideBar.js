import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { MoveToInbox as InboxIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const SideBar = props => {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
      // Catch esc click
      onKeyDown={props.toggleDrawer}
    >
      <List>
        {basicConfig().map((config, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{config.icon}</ListItemIcon>
            <ListItemText primary={config.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawer}>
      {sideList()}
    </Drawer>
  );
};

function basicConfig() {
  return [
    {
      name: "Home",
      icon: <InboxIcon />
    }
  ];
}

export default SideBar;
