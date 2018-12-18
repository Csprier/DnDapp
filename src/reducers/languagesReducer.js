import { REQUEST_LANGUAGES, GET_ALL_LANGUAGES, REQUEST_LANGUAGES_SUCCESS } from '../actions/languagesActions';

const initialState = {
  languages: [],
  loading: false
}

export default function languagesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_LANGUAGES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_LANGUAGES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_LANGUAGES:
      return {
        languages: action.languages,
        loading: false
      }
    default:
      return state;
  }
};