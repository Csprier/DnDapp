import { REQUEST_CHARACTER_CLASSES, GET_ALL_CHARACTER_CLASSES, REQUEST_CHARACTER_CLASSES_SUCCESS } from '../actions/characterClassActions';

const initialState = {
  classes: [],
  loading: false
}

export default function classReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_CHARACTER_CLASSES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_CHARACTER_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_CHARACTER_CLASSES:
      return {
        classes: action.classes,
        loading: false
      }
    default:
      return state;
  }
};