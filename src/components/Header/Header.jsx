import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../../store/action/authAction";

const Header = (props) => {
  const { auth } = props;

  return (
    <header className="containe-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Vitorscape
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {auth ? (
              <>
                <li className="nav-item" style={{ cursor: "pointer" }}>
                  <a className="nav-link" onClick={props.logOut}>
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(authActions.logOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
