import { API_BASE_URL } from '../config';

export const REQUEST_RACES = 'REQUEST_RACES',
  requestRaces = () => ({ type: REQUEST_RACES });

export const REQUEST_RACES_SUCCESS = 'REQUEST_RACES_SUCCESS',
  requestRacesSuccess = () => ({ type: REQUEST_RACES_SUCCESS });

export const GET_ALL_RACES = 'GET_ALL_RACES',
  getAllRaces = (races) => ({
    type: GET_ALL_RACES,
    races
  });

export const listAllRaces = () => dispatch => {
  dispatch(requestRaces())
  return fetch(`${API_BASE_URL}/races`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllRaces', data.results);
      dispatch(getAllRaces(data.results));
      dispatch(requestRacesSuccess());
    })
    .catch(err => console.error(err));
};