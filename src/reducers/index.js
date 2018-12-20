import { combineReducers } from 'redux';
import abilityScoreReducer from './abilityScoresReducer';
import characterClassReducer from './characterClassReducer';
import conditionsReducer from './conditionsReducer';
import damageTypesReducer from './damageTypesReducer';
import featuresReducer from './featuresReducer';
import magicSchoolsReducer from './magicSchoolsReducer';
import languagesReducer from './languagesReducer';
import proficienciesReducer from './proficienciesReducer';
import skillsReducer from './skillsReducer';
import subClassesReducer from './subClassesReducer';
import spellCastingReducer from './spellCastingReducer';
import startingEquipmentReducer from './startingEquipmentReducer';

const appReducer = combineReducers({
  abilityScores: abilityScoreReducer,
  characterClasses: characterClassReducer,
  subClasses: subClassesReducer,
  features: featuresReducer,
  conditions: conditionsReducer,
  damageTypes: damageTypesReducer,
  languages: languagesReducer,
  magicSchools: magicSchoolsReducer,
  proficiencies: proficienciesReducer,
  skills: skillsReducer,
  spellCasting: spellCastingReducer,
  startingEquipment: startingEquipmentReducer
})

export default appReducer;