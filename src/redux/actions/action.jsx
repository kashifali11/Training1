import {
  FETCHING,
  FETCH_PEOPLE,
  SET_SEARCH_KEY,
  RESET_FETCh,
  SET_NATIONALITY,
} from "../types.jsx";
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

export const setNat = (nat) => (dispatch) => {
  return dispatch({
    type: SET_NATIONALITY,
    payload: nat,
  });
};

export const resetFetch = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCh,
  });
};

// export const setSearchKeyAction = (key) => (dispatch) => {
//   return dispatch({
//     type: SET_SEARCH_KEY,
//     payload: key,
//   });
// };
