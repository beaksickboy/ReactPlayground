import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Button,
  TextField,
  CssBaseline,
  Typography,
  Container,
  makeStyles
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = props => {
  const classes = useStyles();

  // Extract i18n
  const { t } = useTranslation("translations");

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleUsernameChange = event => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const login = event => {
    event.preventDefault();
    // Dispatch login action
    props.login({ password, username });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate>
          <TextField
            value={username}
            onChange={handleUsernameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={t("username")}
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={t("password")}
            type="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={t("login")}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
