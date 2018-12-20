import { REQUEST_FEATURES, GET_ALL_FEATURES, REQUEST_FEATURES_SUCCESS } from '../actions/featuresActions';

const initialState = {
  features: [],
  loading: false
}

export default function featuresReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_FEATURES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FEATURES_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_FEATURES:
      return {
        features: action.features,
        loading: false
      }
    default:
      return state;
  }
};