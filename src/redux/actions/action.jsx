import {
  FETCHING,
  FETCH_PEOPLE,
  RESET_FETCh,
} from "../types/types.jsx";
import axios from "axios";
export const fetchPeople = (page, nat) => (dispatch) => {
  dispatch({
    type: FETCHING,
  });
  if (page === 1) {
    axios
      .get(
        "https://randomuser.me/api/?page=" +
          page +
          "&results=100&seed=abc&nat=" +
          nat
      )
      .then((res) => {
        dispatch({
          type: FETCH_PEOPLE,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  } else {
    axios
      .get(
        "https://randomuser.me/api/?page=" +
          page +
          "&results=50&seed=abc&nat=" +
          nat
      )
      .then((res) => {
        dispatch({
          type: FETCH_PEOPLE,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }
};


export const resetFetch = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCh,
  });
};
