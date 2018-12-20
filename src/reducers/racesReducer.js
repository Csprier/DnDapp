import { REQUEST_RACES, GET_ALL_RACES, REQUEST_RACES_SUCCESS } from '../actions/racesActions';

const initialState = {
  races: [],
  loading: false
}

export default function racesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_RACES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_RACES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_RACES:
      return {
        races: action.races,
        loading: false
      }
    default:
      return state;
  }
};