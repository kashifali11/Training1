export const getPerson = (state) => {
  return state.peopleReducer.people.find((person) => {
    return state.modalReducer.personId == person.login.uuid;
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
