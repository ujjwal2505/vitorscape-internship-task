import { toast } from "react-toastify";

const initState = {
  authError: "",
  token: localStorage.getItem("token"),
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      toast.success("Successfully logged in");
      toast.info("Remember the E-CODE to login again");
      return { ...state, token: action.token, authError: "" };
    case "LOGIN_ERROR":
      return { ...state, authError: action.error.message };
    case "LOGOUT_SUCCESS":
      toast.success("Successfully logged out");
      return { ...state, authError: "", token: null };
    default:
      return state;
  }
};

export default authReducer;
