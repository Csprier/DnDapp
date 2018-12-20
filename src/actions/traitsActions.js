import { API_BASE_URL } from '../config';

export const REQUEST_TRAITS = 'REQUEST_TRAITS',
  requestTraits = () => ({ type: REQUEST_TRAITS });

export const REQUEST_TRAITS_SUCCESS = 'REQUEST_TRAITS_SUCCESS',
  requestTraitsSuccess = () => ({ type: REQUEST_TRAITS_SUCCESS });

export const GET_ALL_TRAITS = 'GET_ALL_TRAITS',
  getAllTraits = (traits) => ({
    type: GET_ALL_TRAITS,
    traits
  });

export const listAllTraits = () => dispatch => {
  dispatch(requestTraits())
  return fetch(`${API_BASE_URL}/traits`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      console.log('data from listAllTraits: ', data.results);
      dispatch(getAllTraits(data.results));
      dispatch(requestTraitsSuccess());
    })
    .catch(err => console.error(err));
};