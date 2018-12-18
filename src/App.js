import React, { Component } from 'react';
import AbilityScores from './components/abilityScores';
import Classes from './components/classes';
import Skills from './components/skills';
import Languages from './components/languages';
import Proficiences from './components/proficiencies';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dungeons and Dragons 5th Edition App</h1>
        </header>
        <main>
          <Classes />
          <AbilityScores />
          <Skills />
          <Languages />
          <Proficiences />
        </main>
      </div>
    );
  }
}

export default App;
