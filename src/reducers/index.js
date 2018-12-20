import { combineReducers } from 'redux';
import abilityScoreReducer from './abilityScoresReducer';
import characterClassReducer from './characterClassReducer';
import conditionsReducer from './conditionsReducer';
import damageTypesReducer from './damageTypesReducer';
import equipmentReducer from './equipmentReducer';
import featuresReducer from './featuresReducer';
import magicSchoolsReducer from './magicSchoolsReducer';
import languagesReducer from './languagesReducer';
import proficienciesReducer from './proficienciesReducer';
import racesReducer from './racesReducer';
import skillsReducer from './skillsReducer';
import subClassesReducer from './subClassesReducer';
import spellCastingReducer from './spellCastingReducer';
import startingEquipmentReducer from './startingEquipmentReducer';
import subRacesReducer from './subRacesReducer';
import traitsReducer from './traitsReducer';

const appReducer = combineReducers({
  abilityScores: abilityScoreReducer,
  characterClasses: characterClassReducer,
  features: featuresReducer,
  conditions: conditionsReducer,
  damageTypes: damageTypesReducer,
  equipment: equipmentReducer,
  languages: languagesReducer,
  magicSchools: magicSchoolsReducer,
  proficiencies: proficienciesReducer,
  races: racesReducer,
  skills: skillsReducer,
  spellCasting: spellCastingReducer,
  startingEquipment: startingEquipmentReducer,
  subClasses: subClassesReducer,
  subRaces: subRacesReducer,
  traits: traitsReducer
})

export default appReducer;