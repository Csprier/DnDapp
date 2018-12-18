import { API_BASE_URL } from '../config';

export const REQUEST_LANGUAGES = 'REQUEST_LANGUAGES',
  requestLanguages = () => ({ type: REQUEST_LANGUAGES });

export const REQUEST_LANGUAGES_SUCCESS = 'REQUEST_LANGUAGES_SUCCESS',
  requestLanguagesSuccess = () => ({ type: REQUEST_LANGUAGES_SUCCESS });

export const GET_ALL_LANGUAGES = 'GET_ALL_LANGUAGES',
  getAllLanguages = (languages) => ({
    type: GET_ALL_LANGUAGES,
    languages
  });

export const listAllLanguages = () => dispatch => {
  return fetch(`${API_BASE_URL}/languages`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      console.log('DATA from listAllLanguages', data.results);
      dispatch(getAllLanguages(data.results))
    })
    .catch(err => console.error(err));
};