import {
  FETCHING_PEOPLE,
  FETCH_PEOPLE,
  RESET_FETCH_PEOPLE,
} from "../types/peopleTypes.js";
import axios from "axios";
export const fetchPeople = (page, nat, limit) => (dispatch) => {
  dispatch({
    type: FETCHING_PEOPLE,
  });
  axios
    .get(
      "https://randomuser.me/api/?page=" +
        page +
        "&results=" +
        limit +
        "&seed=abc&nat=" +
        nat
    )
    .then((res) => {
      dispatch({
        type: FETCH_PEOPLE,
        payload: res.data.results,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // try {
  //   const results = await axios.get(
  //     "https://randomuser.me/api/?page=" +
  //       page +
  //       "&results=" +
  //       limit +
  //       "&seed=abc&nat=" +
  //       nat
  //   );
  //   console.log(results)
  // } catch (error) {
  //   console.log(error);
  // }
};

export const resetFetchPeople = () => (dispatch) => {
  return dispatch({
    type: RESET_FETCH_PEOPLE,
  });
};
