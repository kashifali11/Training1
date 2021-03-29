import { SET_NATIONALITY } from "../types/settingsTypes.jsx";
export const setNat = (nat) => (dispatch) => {
  return dispatch({
    type: SET_NATIONALITY,
    payload: nat,
  });
};
