import { combineReducers } from "redux";
import fetchReducer from "./userReducer";
import settingsReducer from "./settingsReducer";
export default combineReducers({
    fetch: fetchReducer,
    settings: settingsReducer,
})