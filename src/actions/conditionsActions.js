import { API_BASE_URL } from '../config';

export const REQUEST_CONDITIONS = 'REQUEST_CONDITIONS',
  requestConditions = () => ({ type: REQUEST_CONDITIONS });

export const REQUEST_CONDITIONS_SUCCESS = 'REQUEST_CONDITIONS_SUCCESS',
  requestConditionsSuccess = () => ({ type: REQUEST_CONDITIONS_SUCCESS });

export const GET_ALL_CONDITIONS = 'GET_ALL_CONDITIONS',
  getAllConditions = (conditions) => ({
    type: GET_ALL_CONDITIONS,
    conditions
  });

export const listAllConditions = () => dispatch => {
  return fetch(`${API_BASE_URL}/conditions`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllConditions', data.results);
      dispatch(getAllConditions(data.results))
    })
    .catch(err => console.error(err));
};