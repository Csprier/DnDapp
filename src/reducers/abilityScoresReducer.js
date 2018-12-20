import { REQUEST_ABILITY_SCORES, GET_ALL_ABILITY_SCORES, REQUEST_ABILITY_SCORES_SUCCESS } from '../actions/abilityScoresActions';

const initialState = {
  abilityScores: [],
  loading: false
}

export default function abilityScoreReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_ABILITY_SCORES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_ABILITY_SCORES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_ABILITY_SCORES:
      return {
        abilityScores: action.abilityScores,
        loading: false,
      }
    default:
      return state;
  }
};