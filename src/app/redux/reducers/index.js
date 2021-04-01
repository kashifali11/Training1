import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import peopleReducer from "./peopleReducer";
import settingsReducer from "./settingsReducer";
export default combineReducers({
  peopleReducer: peopleReducer,
  settingReducer: settingsReducer,
  modalReducer: modalReducer,
});
