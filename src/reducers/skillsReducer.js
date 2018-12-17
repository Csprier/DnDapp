import { REQUEST_SKILLS, GET_ALL_SKILLS, REQUEST_SKILLS_SUCCESS } from '../actions/skillsActions';

const initialState = {
  skills: [],
  loading: false
}

export default function skillsReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SKILLS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_SKILLS:
      return {
        skills: action.skills,
        loading: false
      }
    default:
      return state;
  }
};