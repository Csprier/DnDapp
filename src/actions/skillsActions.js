import { API_BASE_URL } from '../config';

export const REQUEST_SKILLS = 'REQUEST_SKILLS',
  requestSkills = () => ({ type: REQUEST_SKILLS });

export const REQUEST_SKILLS_SUCCESS = 'REQUEST_SKILLS_SUCCESS',
  requestSkillsSuccess = () => ({ type: REQUEST_SKILLS_SUCCESS });

export const GET_ALL_SKILLS = 'GET_ALL_SKILLS',
  getAllSkills = (skills) => ({
    type: GET_ALL_SKILLS,
    skills
  });

export const listAllSkills = () => dispatch => {
  dispatch(requestSkills())
  return fetch(`${API_BASE_URL}/skills`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      // console.log('DATA from listAllSkills', data.results);
      dispatch(getAllSkills(data.results));
      dispatch(requestSkillsSuccess());
    })
    .catch(err => console.error(err));
};