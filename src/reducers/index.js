import { combineReducers } from 'redux';
import characterClassReducer from './characterClassReducer';
import abilityScoreReducer from './abilityScoresReducer';
import skillsReducer from './skillsReducer';
import proficienciesReducer from './proficienciesReducer';
import languagesReducer from './languagesReducer';

const appReducer = combineReducers({
  characterClasses: characterClassReducer,
  abilityScores: abilityScoreReducer,
  skills: skillsReducer,
  proficiencies: proficienciesReducer,
  languages: languagesReducer
})

export default appReducer;