import { REQUEST_STARTING_EQUIPMENT, GET_ALL_STARTING_EQUIPMENT, REQUEST_STARTING_EQUIPMENT_SUCCESS } from '../actions/startingEquipmentActions';

const initialState = {
  startingEquipment: [],
  loading: false
}

export default function startingEquipmentReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_STARTING_EQUIPMENT:
      return {
        ...state,
        loading: true
      }
    case REQUEST_STARTING_EQUIPMENT_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_STARTING_EQUIPMENT:
      return {
        startingEquipment: action.startingEquipment,
        loading: false
      }
    default:
      return state;
  }
};