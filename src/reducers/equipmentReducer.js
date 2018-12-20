import { REQUEST_EQUIPMENT, GET_ALL_EQUIPMENT, REQUEST_EQUIPMENT_SUCCESS } from '../actions/equipmentActions';

const initialState = {
  equipment: [],
  loading: false
}

export default function equipmentReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_EQUIPMENT:
      return {
        ...state,
        loading: true
      }
    case REQUEST_EQUIPMENT_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_EQUIPMENT:
      return {
        equipment: action.equipment,
        loading: false
      }
    default:
      return state;
  }
};