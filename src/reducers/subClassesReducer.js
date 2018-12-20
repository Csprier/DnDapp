import { REQUEST_SUB_CLASSES, GET_ALL_SUB_CLASSES, REQUEST_SUB_CLASSES_SUCCESS } from '../actions/subClassesActions';

const initialState = {
  subClasses: [],
  loading: false
}

export default function subClassesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SUB_CLASSES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SUB_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_SUB_CLASSES:
      return {
        subClasses: action.subClasses,
        loading: false
      }
    default:
      return state;
  }
};