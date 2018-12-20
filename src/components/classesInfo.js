import React, { Component } from 'react';

import AbilityScores from './abilityScores';
import Skills from './skills';
import Languages from './languages';
import Proficiences from './proficiencies';

class CharacterInfo extends Component {
  render() {
    return (
      <div className="character-info-container">
        <h2>Character Information</h2>
        <AbilityScores />
        <Skills />
        <Languages />
        <Proficiences />  
      </div> 
    );
  }
};

export default CharacterInfo;