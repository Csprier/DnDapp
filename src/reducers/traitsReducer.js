import { REQUEST_TRAITS, GET_ALL_TRAITS, REQUEST_TRAITS_SUCCESS } from '../actions/traitsActions';

const initialState = {
  traits: [],
  loading: false
}

export default function traitsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_TRAITS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_TRAITS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_TRAITS:
      return {
        traits: action.traits,
        loading: false
      }
    default:
      return state;
  }
};