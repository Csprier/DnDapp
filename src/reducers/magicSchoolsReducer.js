import { REQUEST_MAGIC_SCHOOLS, GET_ALL_MAGIC_SCHOOLS, REQUEST_MAGIC_SCHOOLS_SUCCESS } from '../actions/magicSchoolsActions';

const initialState = {
  magicSchools: [],
  loading: false
}

export default function magicSchoolsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_MAGIC_SCHOOLS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_MAGIC_SCHOOLS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_MAGIC_SCHOOLS:
      return {
        magicSchools: action.magicSchools,
        loading: false
      }
    default:
      return state;
  }
};