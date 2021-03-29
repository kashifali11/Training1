import { SET_SEARCH_KEY, SET_NATIONALITY } from "../types/settingsTypes.jsx";
const initialState = {
  nationality: "",
  search: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NATIONALITY:
      return {
        ...state,
        nationality: action.payload,
      };
    case SET_SEARCH_KEY:
        return{
            ...state,
            search: action.payload,
        }
    default:
      return state;
  }
}
