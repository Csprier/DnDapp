import { API_BASE_URL } from '../config';

export const REQUEST_FEATURES = 'REQUEST_FEATURES',
  requestFeatures = () => ({ type: REQUEST_FEATURES });

export const REQUEST_FEATURES_SUCCESS = 'REQUEST_FEATURES_SUCCESS',
  requestFeaturesSuccess = () => ({ type: REQUEST_FEATURES_SUCCESS });

export const GET_ALL_FEATURES = 'GET_ALL_FEATURES',
  getAllFeatures = (features) => ({
    type: GET_ALL_FEATURES,
    features
  });

export const listAllFeatures = () => dispatch => {
  return fetch(`${API_BASE_URL}/features`, { method: 'GET' })
    .then(res => res.json())
    .then(data => dispatch(getAllFeatures(data.results)))
    .catch(err => console.error(err));
};