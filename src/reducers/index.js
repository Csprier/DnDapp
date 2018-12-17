import { combineReducers } from 'redux';
import characterClassReducer from './characterClassReducer';

const appReducer = combineReducers({
  characterClasses: characterClassReducer
})

export default appReducer;