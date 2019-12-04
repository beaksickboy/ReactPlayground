import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const LoginForm = props => {
  // Extract i18n
  const { t } = useTranslation("translations");

  const [username, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    // Dispatch login action
    props.login({password, username});
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">{t("username")}</label>
        <input
          value={username}
          onChange={handleUsernameChange}
          id="username"
          name="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          id="password"
          name="password"
          type="password"
          className="form-control"
        />
      </div>

      <button onClick={login}>Login</button>
    </form>
  );
};

export default LoginForm;


