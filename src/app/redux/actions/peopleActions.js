import {
  FETCHING,
  FETCH_PEOPLE,
  RESET_FETCH_PEOPLE,
} from "../types/peopleTypes.js";
import axios from "axios";
export const fetchPeople = (page, nat, results) => (dispatch) => {
  dispatch({
    type: FETCHING,
  });
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

export const resetFetchPeople = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCH_PEOPLE,
  });
};
