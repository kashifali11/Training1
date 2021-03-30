import { SET_NATIONALITY } from "../types/settingsTypes.js";
export const setNationality = (nationality) => (dispatch) => {
  return dispatch({
    type: SET_NATIONALITY,
    payload: nationality,
  });
};
