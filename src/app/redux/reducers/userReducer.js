import { FETCH_PEOPLE, FETCHING, RESET_FETCH } from "../types/userTypes.js";

const initialState = {
  people: [],
  hasMore: true,
  page: 1,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: state.people.concat(action.payload),
        hasMore: state.people.length + 50 < 999 ? true : false,
        page: state.page + 1,
        loading: false,
      };
    case FETCHING:
      return {
        ...state,
        loading: true,
      };
    case RESET_FETCH:
      return {
        ...state,
        people: [],
        hasMore: true,
        page: 1,
        loading: false,
      };
    default:
      return state;
  }
}
