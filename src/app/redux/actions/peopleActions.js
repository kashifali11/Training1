import {
  FETCHING_PEOPLE,
  FETCH_PEOPLE,
  RESET_FETCH_PEOPLE,
} from "../types/peopleTypes.js";
import axios from "axios";
export const fetchPeople = (page, nat, limit) => async (dispatch) => {
  dispatch({
    type: FETCHING_PEOPLE,
  });
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?page=" +
        page +
        "&results=" +
        limit +
        "&seed=abc&nat=" +
        nat
    );
    return dispatch({
      type: FETCH_PEOPLE,
      payload: response.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetFetchPeople = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCH_PEOPLE,
  });
};
