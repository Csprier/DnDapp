import React, { Component } from 'react';

import AbilityScores from './abilityScores';
import Languages from './languages';
import Proficiences from './proficiencies';
import Skills from './skills';

import '../css/characterInfo.css';
import '../css/toggleDisplay.css';

class CharacterInfo extends Component {
  constructor() {
    super();

    this.state = {
      display: false
    }
  }

  toggleDisplay = () => {
    console.log('Toggle display button clicked. Changing the state from:', this.state.display);
    this.setState({
      display: !this.state.display
    });
    // console.log('this.setState has occurred in toggleDisplay()');
  }

  render() {
    return (
      <div className="character-info-container">
        <div className="char-info-header" onClick={() => this.toggleDisplay()}>
          <h2>Character Information</h2>
          <p>&#8964;</p>
        </div>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <AbilityScores />
          <Skills />
          <Languages />
          <Proficiences /> 
        </div> 
      </div> 
    );
  }
};

export default CharacterInfo;