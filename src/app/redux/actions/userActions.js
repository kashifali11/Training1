import { FETCHING, FETCH_PEOPLE, RESET_FETCH } from "../types/userTypes.js";
import axios from "axios";
export const fetchPeople = (page, nat) => (dispatch) => {
  dispatch({
    type: FETCHING,
  });
  let results;
  if (page === 1) {
    results = 100;
  } else {
    results = 50;
  }
  axios
    .get(
      "https://randomuser.me/api/?page=" +
        page +
        "&results=" +
        results +
        "&seed=abc&nat=" +
        nat
    )
    .then((res) => {
      dispatch({
        type: FETCH_PEOPLE,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const resetFetch = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCH,
  });
};
