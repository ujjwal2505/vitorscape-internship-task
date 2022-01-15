import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
