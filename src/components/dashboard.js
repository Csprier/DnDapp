import React, { Component } from 'react';

import AbilityScores from './abilityScores';
import Classes from './classes';
import Conditions from './conditions';
import DamageTypes from './damageTypes';
import Features from './features';
import MagicSchools from './magicSchools'
import Languages from './languages';
import Proficiences from './proficiencies';
import Skills from './skills';
import SpellCasting from './spellCasting';
import StartingEquipment from './startingEquipment';
import SubClasses from './subClasses';

// import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
          <div className="game-mechanics-info-container">
            <h2>Game Mechanics</h2>
            <Conditions />
            <DamageTypes />
            <MagicSchools />
          </div>

          <div className="character-info-container">
            <h2>Character Information</h2>
            <AbilityScores />
            <Skills />
            <Languages />
            <Proficiences />  
          </div>

          <div className="classes-info-container">
            <h2>Classes</h2>
            <Classes />
            <SubClasses />
            <Features />
            <SpellCasting />
            <StartingEquipment />
          </div>

          <div className="races-info-container">
            <h2>Races</h2>
            {/* <Races />
            <SubRaces />
            <Traits /> */}
          </div>

          <div className="equipment-info-container">
            <h2>Equipment</h2>
          </div>
      </div>
    );
  }
}

export default Dashboard;
