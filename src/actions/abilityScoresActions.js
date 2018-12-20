import { API_BASE_URL } from '../config';

export const REQUEST_ABILITY_SCORES = 'REQUEST_ABILITY_SCORES',
  requestAbilityScores = () => ({ type: REQUEST_ABILITY_SCORES });

export const REQUEST_ABILITY_SCORES_SUCCESS = 'REQUEST_ABILITY_SCORES_SUCCESS',
  requestAbilityScoresSuccess = () => ({ type: REQUEST_ABILITY_SCORES_SUCCESS });

export const GET_ALL_ABILITY_SCORES = 'GET_ALL_ABILITY_SCORES',
  getAllAbilityScores = (abilityScores) => ({
    type: GET_ALL_ABILITY_SCORES,
    abilityScores
  });

export const listAllAbilityScores = () => dispatch => {
  dispatch(requestAbilityScores())
  return fetch(`${API_BASE_URL}/ability-scores`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllAbilityScores', data.results);
      dispatch(getAllAbilityScores(data.results))
      dispatch(requestAbilityScoresSuccess())
    })
    .catch(err => console.error(err));
};