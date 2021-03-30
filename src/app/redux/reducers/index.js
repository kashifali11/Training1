import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import settingsReducer from "./settingsReducer";
export default combineReducers({
  peopleReducer: peopleReducer,
  settingReducer: settingsReducer,
});
