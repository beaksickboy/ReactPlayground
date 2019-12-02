import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "../LoginForm";
import { login } from "../../actions/auth";
import { userInfo } from "os";

const LoginContainer = props => {
  return props.user ? <Redirect to="/home" /> : <LoginForm {...props}/>;
};



const mapStateToProps = state => ({
  user: state.auth.user,
  invalidInfo: state.auth.invalidInfo
});

const mapDispatchToProps = dispatch => ({
  login: (userInfo) => dispatch(login(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
