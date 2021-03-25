import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer.jsx";
import settingsReducer from "./settingsReducer.jsx";
export default combineReducers({
    fetch: fetchReducer,
    settings: settingsReducer,
})