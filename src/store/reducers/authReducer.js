import { toast } from "react-toastify";

const initState = {
  authError: "",
  token: localStorage.getItem("token"),
  user: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      toast.success("Successfully logged in");
      // toast.info("Remember the E-CODE to login again");
      return {
        ...state,
        user: action.user,
        token: action.token,
        authError: "",
      };
    case "LOGIN_ERROR":
      return { ...state, authError: action.error.message };
    case "LOGOUT_SUCCESS":
      toast.success("Successfully logged out");
      return { ...state, user: {}, authError: "", token: null };
    default:
      return state;
  }
};

export default authReducer;
