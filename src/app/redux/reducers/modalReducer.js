import { PERSON_MODAL_CLOSE, PERSON_MODAL_OPEN } from "../types/modalTypes";
const initialState = {
  personModal: {
    modalOpen : false,
    personId: ""
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PERSON_MODAL_OPEN:
      return {
        ...state,
        personModal:{
          modalOpen: true,
          personId: action.payload,
        }
      };
    case PERSON_MODAL_CLOSE:
      return {
        ...state,
        personModal:{
          modalOpen: false,
          personId: "",
        }
      };
    default:
      return state;
  }
}
