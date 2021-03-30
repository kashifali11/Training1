export const getPerson = (state, id) => {
    return state.fetch.people.filter((person) => {
      return id === person.login.uuid;
    });
};

export const getPeopleFilteredByKeyword = (state) => {
  return state.fetch.people.filter((person) => {
    const key = state.settings.search.toLowerCase();
    const fname = person.name.first.toLowerCase();
    const lname = person.name.last.toLowerCase();
    return (fname.includes(key))||(lname.includes(key));
  });
};