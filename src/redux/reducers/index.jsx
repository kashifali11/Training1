import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer.jsx";
export default combineReducers({
    fetch: fetchReducer,
})