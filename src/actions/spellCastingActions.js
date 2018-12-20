import { API_BASE_URL } from '../config';

export const REQUEST_SPELL_CASTING = 'REQUEST_SPELL_CASTING',
  requestSpellCasting = () => ({ type: REQUEST_SPELL_CASTING });

export const REQUEST_SPELL_CASTING_SUCCESS = 'REQUEST_SPELL_CASTING_SUCCESS',
  requestSpellCastingSuccess = () => ({ type: REQUEST_SPELL_CASTING_SUCCESS });

export const GET_ALL_SPELL_CASTING = 'GET_ALL_SPELL_CASTING',
  getAllSpellCasting = (spellCasting) => ({
    type: GET_ALL_SPELL_CASTING,
    spellCasting
  });

export const listAllSpellCasting = () => dispatch => {
  dispatch(requestSpellCasting())
  return fetch(`${API_BASE_URL}/spellcasting`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      dispatch(getAllSpellCasting(data.results));
      dispatch(requestSpellCastingSuccess());
    })
    .catch(err => console.error(err));
};