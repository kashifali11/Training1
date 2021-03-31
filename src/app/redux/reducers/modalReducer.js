import { MODAL_CLOSE, MODAL_OPEN } from "../types/modalTypes";
const initialState = {
  modalOpen: false,
  personId: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:

      return {
        ...state,
        modalOpen: true,
        personId: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
        personId: "",
      };
    default:
      return state;
  }
}
