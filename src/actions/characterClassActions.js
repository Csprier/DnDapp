import { API_BASE_URL } from '../config';

// Request character classes
export const REQUEST_CHARACTER_CLASSES = 'REQUEST_CHARACTER_CLASSES',
  requestCharacterClasses = () => ({ type: REQUEST_CHARACTER_CLASSES });

// Successful request of character classes
export const REQUEST_CHARACTER_CLASSES_SUCCESS = 'REQUEST_CHARACTER_CLASSES_SUCCESS',
  requestCharacterClassesSuccess = () => ({ type: REQUEST_CHARACTER_CLASSES_SUCCESS });

// Action to get all the classes to the reducer to be put into the state
export const GET_ALL_CHARACTER_CLASSES = 'GET_ALL_CHARACTER_CLASSES',
  getAllCharacterClasses = (classes) => ({
    type: GET_ALL_CHARACTER_CLASSES,
    classes
  });

  // Async call to API URL/classes
export const listAllClasses = () => dispatch => {
  dispatch(requestCharacterClasses())
  return fetch(`${API_BASE_URL}/classes`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      dispatch(getAllCharacterClasses(data.results))
      dispatch(requestCharacterClassesSuccess())
    })
    .catch(err => console.error(err));
};