import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import "./home.css";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const token = localStorage.getItem("token");
  const decoded_token = jwt_decode(token);

  return (
    <>
      <div className="card user-card">
        <div className="card-body">
          <div>
            First Name : <span className="">{decoded_token.name}</span>
          </div>
          <div>Last Name : {decoded_token.surname}</div>
          <div>E-Code : {decoded_token.eCode}</div>
          <div>User Type : {decoded_token.userType}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

export default connect(mapStateToProps)(Home);
