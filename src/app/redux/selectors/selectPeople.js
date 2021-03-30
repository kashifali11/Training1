import { getPeopleFilteredByKeyword } from "./filterPrerson.js";
export const selectPeople = (state) => {
  let people;
  if (state.peopleReducer.searchPeopleTerm === "") {
    people = state.peopleReducer.people.slice(
      0,
      state.peopleReducer.people.length - 50
    );
  } else {
    people = getPeopleFilteredByKeyword(state);
  }
  return people;
};
