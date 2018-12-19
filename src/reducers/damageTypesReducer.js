import { REQUEST_DAMAGE_TYPES, GET_ALL_DAMAGE_TYPES, REQUEST_DAMAGE_TYPES_SUCCESS } from '../actions/damageTypesActions';

const initialState = {
  damageTypes: [],
  loading: false
}

export default function damageTypesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DAMAGE_TYPES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_DAMAGE_TYPES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_DAMAGE_TYPES:
      return {
        damageTypes: action.damageTypes,
        loading: false
      }
    default:
      return state;
  }
};