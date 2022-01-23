import axios from "axios";

const logIn = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/login", user);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        token: response.data.token,
        user: response.data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_ERROR", error: error.response.data });
    }
  };
};

const logOut = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGOUT_ERROR", error });
    }
  };
};

const register = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        user: response.data.user,
        token: response.data.token,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_ERROR", error: error.response.data });
    }
  };
};

export const authActions = {
  logIn,
  logOut,
  register,
};
