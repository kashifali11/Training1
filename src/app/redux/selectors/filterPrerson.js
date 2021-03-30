export const getPerson = (state, id) => {
  return state.peopleReducer.people.find((person) => {
    return id == person.login.uuid;
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
