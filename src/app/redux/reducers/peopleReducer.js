import {
  FETCH_PEOPLE,
  FETCHING_PEOPLE,
  RESET_FETCH_PEOPLE,
  SET_SEARCH_TERM,
} from "../types/peopleTypes.js";

const initialState = {
  people: [],
  hasMore: true,
  pageNo: 1,
  loading: false,
  searchPeopleTerm: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: state.people.concat(action.payload),
        hasMore: state.people.length + 50 < 999 ? true : false,
        pageNo: state.pageNo + 1,
        loading: false,
      };
    case FETCHING_PEOPLE:
      return {
        ...state,
        loading: true,
      };
    case RESET_FETCH_PEOPLE:
      return {
        ...state,
        people: [],
        hasMore: true,
        pageNo: 1,
        loading: false,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchPeopleTerm: action.payload,
      };
    default:
      return state;
  }
}
