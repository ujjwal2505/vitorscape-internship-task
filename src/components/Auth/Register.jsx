import React, { useEffect, useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import { authActions } from "../../store/action/authAction";
import { Link, Navigate } from "react-router-dom";

const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.register(state);
  };

  const { auth, authError } = props;

  if (auth) return <Navigate to="/" />;
  return (
    <>
      <div className="login-form">
        <h3 className="h3 pt-3 text-center"> Register</h3>

        <form className="form-signin" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="name"
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="surname"
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Phone No."
            id="phone"
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Address"
            id="address"
            onChange={handleChange}
          />
          {/* <select
            className="form-control"
            id="userType"
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Employee type
            </option>
            <option value="ADMIN">ADMIN</option>
            <option value="EMPLOYEE">EMPLOYEE</option>
          </select> */}

          <button className="btn btn-outline-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Register
          </button>
          <hr />
          <p>
            Already have Account?
            <Link to="/login">
              <i className="fas fa-user-plus" /> Log in
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
    register: (creds) => dispatch(authActions.register(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
