import { API_BASE_URL } from '../config';

export const REQUEST_STARTING_EQUIPMENT = 'REQUEST_STARTING_EQUIPMENT',
  requestStartingEquipment = () => ({ type: REQUEST_STARTING_EQUIPMENT });

export const REQUEST_STARTING_EQUIPMENT_SUCCESS = 'REQUEST_STARTING_EQUIPMENT_SUCCESS',
  requestStartingEquipmentSuccess = () => ({ type: REQUEST_STARTING_EQUIPMENT_SUCCESS });

export const GET_ALL_STARTING_EQUIPMENT = 'GET_ALL_STARTING_EQUIPMENT',
  getAllStartingEquipment = (startingEquipment) => ({
    type: GET_ALL_STARTING_EQUIPMENT,
    startingEquipment
  });

export const listAllStartingEquipment = () => dispatch => {
  return fetch(`${API_BASE_URL}/startingequipment`, { method: 'GET' })
    .then(res => res.json())
    .then(data => dispatch(getAllStartingEquipment(data.results)))
    .catch(err => console.error(err));
};