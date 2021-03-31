import { SET_NATIONALITY } from "../types/settingsTypes";
import { fetchPeople, resetFetchPeople } from "./peopleActions";
export const setNationality = (nationality) => (dispatch, getState) => {
  dispatch({
    type: SET_NATIONALITY,
    payload: nationality,
  });
  console.log();
  dispatch(resetFetchPeople());
  return dispatch(fetchPeople(1, nationality, 100));
};
