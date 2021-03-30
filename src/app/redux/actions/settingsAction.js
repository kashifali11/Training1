import { SET_NATIONALITY } from "../types/settingsTypes.js";
export const setNat = (nat) => (dispatch) => {
  return dispatch({
    type: SET_NATIONALITY,
    payload: nat,
  });
};
