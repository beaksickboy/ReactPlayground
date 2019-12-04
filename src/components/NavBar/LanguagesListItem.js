import React, { useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon
} from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import {
  Collapse,
  ListItemText,
  ListItem,
  List,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import i18n from "i18next";

const LanguagesListItem = props => {
  const { t } = useTranslation("translations");
  const [expandMore, setExpandMore] = useState(false);

  const handleClick = () => {
    setExpandMore(!expandMore);
  };

  const handleChange = event => {
    i18n.changeLanguage(event.target.value);
  };

  const renderLanguageOption = () => {
    return props.langs.map((lang, index) => (
      <FormControlLabel
        key={index}
        value={lang.code}
        control={<Radio />}
        label={t(lang.name)}
      />
    ));
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={t("languages")} />
        {expandMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={expandMore} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <RadioGroup value={i18n.language} onChange={handleChange}>
              {renderLanguageOption()}
            </RadioGroup>
          </ListItem>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default LanguagesListItem;
