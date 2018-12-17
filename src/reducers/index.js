import { combineReducers } from 'redux';
import characterClassReducer from './characterClassReducer';
import abilityScoreReducer from './abilityScoresReducer';
import skillsReducer from './skillsReducer';
import proficienciesReducer from './proficienciesReducer';

const appReducer = combineReducers({
  characterClasses: characterClassReducer,
  abilityScores: abilityScoreReducer,
  skills: skillsReducer,
  proficiencies: proficienciesReducer
})

export default appReducer;