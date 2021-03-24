import { FETCHING, FETCH_PEOPLE } from "../types.jsx";
import axios from "axios";
export const fetchPeople = (page) => (dispatch, state) => {
  dispatch({
    type: FETCHING,
  });
  axios
    .get("https://randomuser.me/api/?page=" + page + "&results=50&seed=abc")
    .then((res) => {
      dispatch({
        type: FETCH_PEOPLE,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};
