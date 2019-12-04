import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemText, ListItem, List } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import LanguagesListItem from "./LanguagesListItem";
import { langs } from "../../i18n";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minWidth: 250,
    backgroundColor: theme.palette.background.paper,
    color: "black"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function MenuOptionItems() {
  const { t } = useTranslation("translations");
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      <LanguagesListItem langs={langs}/>
      <ListItem button>
        <ListItemText primary={t("logout")} />
      </ListItem>
    </List>
  );
}
