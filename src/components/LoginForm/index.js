import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";

const LoginForm = props => {
  // Extract i18n
  const { t } = useTranslation("translations");

  const {username, setUserName} = useState({ username: null });

  const {password, setPassword} = useState({ password: null });
  
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">{t("username")}</label>
        <input type="email" className="form-control" id="exampleInputEmail1" />
      </div>

      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
  );
};

export default LoginForm;
