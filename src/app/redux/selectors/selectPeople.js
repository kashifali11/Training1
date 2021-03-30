import { getPeopleFilteredByKeyword } from "./filterPrerson.js";
export const selectPeople = (state) => {
  let p;
  if (state.settings.search === "") {
    p = state.fetch.people.slice(0, state.fetch.people.length - 50);
  } else {
    p = getPeopleFilteredByKeyword(state);
  }
  return p;
};
