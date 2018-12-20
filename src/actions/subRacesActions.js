import { API_BASE_URL } from '../config';

export const REQUEST_SUB_RACES = 'REQUEST_SUB_RACES',
  requestSubRaces = () => ({ type: REQUEST_SUB_RACES });

export const REQUEST_SUB_RACES_SUCCESS = 'REQUEST_SUB_RACES_SUCCESS',
  requestSubRacesSuccess = () => ({ type: REQUEST_SUB_RACES_SUCCESS });

export const GET_ALL_SUB_RACES = 'GET_ALL_SUB_RACES',
  getAllSubRaces = (subRaces) => ({
    type: GET_ALL_SUB_RACES,
    subRaces
  });

export const listAllSubRaces = () => dispatch => {
  dispatch(requestSubRaces())
  return fetch(`${API_BASE_URL}/subraces`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllSubRaces', data.results);
      dispatch(getAllSubRaces(data.results));
      dispatch(requestSubRacesSuccess());
    })
    .catch(err => console.error(err));
};