import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import "./home.css";

import "react-toastify/dist/ReactToastify.css";

const Home = (props) => {
  console.log(props.user);
  const { user } = props;
  return (
    <>
      <div className="card user-card">
        <div className="card-body">
          <div>
            First Name : <span className="">{user.name}</span>
          </div>
          <div>Last Name : {user.surname}</div>
          <div>Email : {user.email}</div>
          <div>Phone No : {user.phone}</div>
          <div>Address : {user.address}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Home);
