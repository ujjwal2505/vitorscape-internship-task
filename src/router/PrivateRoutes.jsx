import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoutes(props) {
  return props.auth ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
