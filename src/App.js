import React, { Component } from 'react';

import AbilityScores from './components/abilityScores';
import Classes from './components/classes';
import Conditions from './components/conditions';
import DamageTypes from './components/damageTypes';
import MagicSchools from './components/magicSchools'
import Languages from './components/languages';
import Proficiences from './components/proficiencies';
import Skills from './components/skills';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dungeons and Dragons 5th Edition App</h1>
        </header>

        <main>
          <div className="game-mechanics-info-container">
            <h2>Game Mechanics</h2>
            {/* <Conditions />
            <DamageTypes /> */}
            <MagicSchools />
          </div>

          <div className="character-info-container">
            <h2>Character Information</h2>
            {/* <AbilityScores />
            <Skills />
            <Languages />
            <Proficiences />   */}
          </div>

          <div className="classes-info-container">
            <h2>Classes</h2>
            {/* <Classes />             */}
          </div>

          <div className="races-info-container">
            <h2>Races</h2>
          </div>

          <div className="equipment-info-container">
            <h2>Equipment</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
