import { FETCH_PEOPLE } from "../types.jsx";

const initialState = {
  people: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };

    default:
      return state;
  }
}
