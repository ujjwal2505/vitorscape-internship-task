import React, { useEffect, useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import { authActions } from "../../store/action/authAction";
import { Link, Navigate } from "react-router-dom";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.logIn(state);
  };

  const { auth, authError } = props;

  if (auth) return <Navigate to="/" />;
  return (
    <>
      <div className="login-form">
        <h3 className="h3 pt-3 text-center"> Sign in</h3>

        <form className="form-signin" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="email"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="btn btn-outline-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Sign in
          </button>

          <hr />
          <p>
            New user ?
            <Link to="/register">
              <i className="fas fa-user-plus" /> Sign up
            </Link>
          </p>
        </form>
        {authError ? (
          <div className="p-3 mb-2 bg-danger text-white">
            <span>{authError}</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(authActions.logIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
