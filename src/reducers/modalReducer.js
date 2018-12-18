import { TOGGLE_MODAL } from '../actions/modalActions';

const initialState = {
  isOpen: false
}

export default function modalReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {
        isOpen: !action.isOpen
      }
    default:
      return state;
  }
}