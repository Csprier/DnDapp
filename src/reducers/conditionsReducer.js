import { REQUEST_CONDITIONS, GET_ALL_CONDITIONS, REQUEST_CONDITIONS_SUCCESS } from '../actions/conditionsActions';

const initialState = {
  conditions: [],
  loading: false
}

export default function conditionsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_CONDITIONS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_CONDITIONS:
      return {
        conditions: action.conditions,
        loading: false
      }
    default:
      return state;
  }
};