import { API_BASE_URL } from '../config';

export const REQUEST_DAMAGE_TYPES = 'REQUEST_DAMAGE_TYPES',
  requestDamageTypes = () => ({ type: REQUEST_DAMAGE_TYPES });

export const REQUEST_DAMAGE_TYPES_SUCCESS = 'REQUEST_DAMAGE_TYPES_SUCCESS',
  requestDamageTypesSuccess = () => ({ type: REQUEST_DAMAGE_TYPES_SUCCESS });

export const GET_ALL_DAMAGE_TYPES = 'GET_ALL_DAMAGE_TYPES',
  getAllDamageTypes = (damageTypes) => ({
    type: GET_ALL_DAMAGE_TYPES,
    damageTypes
  });

export const listAllDamageTypes = () => dispatch => {
  return fetch(`${API_BASE_URL}/damage-types`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllDamageTypes', data.results);
      dispatch(getAllDamageTypes(data.results))
    })
    .catch(err => console.error(err));
};