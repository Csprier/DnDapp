import { REQUEST_PROFICIENCIES, GET_ALL_PROFICIENCIES, REQUEST_PROFICIENCIES_SUCCESS } from '../actions/proficienciesActions';

const initialState = {
  proficiencies: [],
  loading: false
}

export default function proficienciesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_PROFICIENCIES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_PROFICIENCIES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_PROFICIENCIES:
      return {
        proficiencies: action.proficiencies,
        loading: false
      }
    default:
      return state;
  }
};