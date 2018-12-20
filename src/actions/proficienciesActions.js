import { API_BASE_URL } from '../config';

export const REQUEST_PROFICIENCIES = 'REQUEST_PROFICIENCIES',
  requestProficiencies = () => ({ type: REQUEST_PROFICIENCIES });

export const REQUEST_PROFICIENCIES_SUCCESS = 'REQUEST_PROFICIENCIES_SUCCESS',
  requestProficienciesSuccess = () => ({ type: REQUEST_PROFICIENCIES_SUCCESS });

export const GET_ALL_PROFICIENCIES = 'GET_ALL_PROFICIENCIES',
  getAllProficiencies = (proficiencies) => ({
    type: GET_ALL_PROFICIENCIES,
    proficiencies
  });

export const listAllProficiencies = () => dispatch => {
  dispatch(requestProficiencies())
  return fetch(`${API_BASE_URL}/proficiencies`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      dispatch(getAllProficiencies(data.results));
      dispatch(requestProficienciesSuccess());
    })
    .catch(err => console.error(err));
};