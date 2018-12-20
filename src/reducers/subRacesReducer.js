import { REQUEST_SUB_RACES, GET_ALL_SUB_RACES, REQUEST_SUB_RACES_SUCCESS } from '../actions/subRacesActions';

const initialState = {
  subRaces: [],
  loading: false
}

export default function subRacesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SUB_RACES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SUB_RACES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_SUB_RACES:
      return {
        subRaces: action.subRaces,
        loading: false
      }
    default:
      return state;
  }
};