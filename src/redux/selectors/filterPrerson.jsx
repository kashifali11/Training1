export const getPerson = (state, id) => {
    return state.fetch.people.filter((person) => {
      return id === person.login.uuid;
    });
};