export const getPerson = (state) => {
  return state.peopleReducer.people.find((person) => {
    return state.modalReducer.personModal.personId == person.login.uuid;
  });
};

export const getPeopleFilteredByKeyword = (state) => {
  return state.peopleReducer.people.filter((person) => {
    const searchTerm = state.peopleReducer.searchPeopleTerm.toLowerCase();
    const fname = person.name.first.toLowerCase();
    const lname = person.name.last.toLowerCase();
    return fname.includes(searchTerm) || lname.includes(searchTerm);
  });
};

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
