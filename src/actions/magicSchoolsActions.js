import { API_BASE_URL } from '../config';

export const REQUEST_MAGIC_SCHOOLS = 'REQUEST_MAGIC_SCHOOLS',
  requestMagicSchools = () => ({ type: REQUEST_MAGIC_SCHOOLS });

export const REQUEST_MAGIC_SCHOOLS_SUCCESS = 'REQUEST_MAGIC_SCHOOLS_SUCCESS',
  requestMagicSchoolsSuccess = () => ({ type: REQUEST_MAGIC_SCHOOLS_SUCCESS });

export const GET_ALL_MAGIC_SCHOOLS = 'GET_ALL_MAGIC_SCHOOLS',
  getAllMagicSchools = (schools) => ({
    type: GET_ALL_MAGIC_SCHOOLS,
    schools
  });

export const listAllMagicSchools = () => dispatch => {
  dispatch(requestMagicSchools())
  return fetch(`${API_BASE_URL}/magic-schools`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      console.log('DATA from listAllMagicSchools', data.results);
      dispatch(getAllMagicSchools(data.results))
    })
    .catch(err => console.error(err));
};