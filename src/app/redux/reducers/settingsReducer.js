import { SET_NATIONALITY } from "../types/settingsTypes.js";
const initialState = {
  nationality: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NATIONALITY:
      return {
        ...state,
        nationality: action.payload,
      };
    default:
      return state;
  }
}
