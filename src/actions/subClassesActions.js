import { API_BASE_URL } from '../config';

export const REQUEST_SUB_CLASSES = 'REQUEST_SUB_CLASSES',
  requestSubClasses = () => ({ type: REQUEST_SUB_CLASSES });

export const REQUEST_SUB_CLASSES_SUCCESS = 'REQUEST_SUB_CLASSES_SUCCESS',
  requestSubClassesSuccess = () => ({ type: REQUEST_SUB_CLASSES_SUCCESS });

export const GET_ALL_SUB_CLASSES = 'GET_ALL_SUB_CLASSES',
  getAllSubClasses = (subClasses) => ({
    type: GET_ALL_SUB_CLASSES,
    subClasses
  });

export const listAllSubClasses = () => dispatch => {
  dispatch(requestSubClasses())
  return fetch(`${API_BASE_URL}/subclasses`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      dispatch(getAllSubClasses(data.results));
      dispatch(requestSubClassesSuccess());
    })
    .catch(err => console.error(err));
};