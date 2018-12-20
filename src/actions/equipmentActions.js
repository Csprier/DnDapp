import { API_BASE_URL } from '../config';

export const REQUEST_EQUIPMENT = 'REQUEST_EQUIPMENT',
  requestEquipment = () => ({ type: REQUEST_EQUIPMENT });

export const REQUEST_EQUIPMENT_SUCCESS = 'REQUEST_EQUIPMENT_SUCCESS',
  requestEquipmentSuccess = () => ({ type: REQUEST_EQUIPMENT_SUCCESS });

export const GET_ALL_EQUIPMENT = 'GET_ALL_EQUIPMENT',
  getAllEquipment = (equipment) => ({
    type: GET_ALL_EQUIPMENT,
    equipment
  });

export const listAllEquipment = () => dispatch => {
  dispatch(requestEquipment())
  return fetch(`${API_BASE_URL}/equipment`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      console.log('data from listAllEquipment: ', data.results);
      dispatch(getAllEquipment(data.results));
      dispatch(requestEquipmentSuccess());
    })
    .catch(err => console.error(err));
};