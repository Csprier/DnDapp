import { REQUEST_SPELL_CASTING, GET_ALL_SPELL_CASTING, REQUEST_SPELL_CASTING_SUCCESS } from '../actions/spellCastingActions';

const initialState = {
  spellCasting: [],
  loading: false
}

export default function spellCastingReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SPELL_CASTING:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SPELL_CASTING_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case GET_ALL_SPELL_CASTING:
      return {
        spellCasting: action.spellCasting,
        loading: false
      }
    default:
      return state;
  }
};