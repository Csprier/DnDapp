import { REQUEST_CHARACTER_CLASSES } from '../actions/characterClassActions';

export const initialState = {
  classes: [],
  classObjects: []
}

export default function classReducer(state = initialState, action) {
  if (action.type === REQUEST_CHARACTER_CLASSES) {
    return {
      classes: action.results.map(item => item.name)
    }
  }
  return state;
}