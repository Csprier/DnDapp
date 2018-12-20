import { combineReducers } from 'redux';
import abilityScoreReducer from './abilityScoresReducer';
import characterClassReducer from './characterClassReducer';
import conditionsReducer from './conditionsReducer';
import damageTypesReducer from './damageTypesReducer';
import magicSchoolsReducer from './magicSchoolsReducer';
import languagesReducer from './languagesReducer';
import proficienciesReducer from './proficienciesReducer';
import skillsReducer from './skillsReducer';
import subClassesReducer from './subClassesReducer';

const appReducer = combineReducers({
  abilityScores: abilityScoreReducer,
  characterClasses: characterClassReducer,
  subClasses: subClassesReducer,
  conditions: conditionsReducer,
  damageTypes: damageTypesReducer,
  languages: languagesReducer,
  magicSchools: magicSchoolsReducer,
  proficiencies: proficienciesReducer,
  skills: skillsReducer,
})

export default appReducer;