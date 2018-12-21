import React, { Component } from 'react';

import AbilityScores from './abilityScores';
import Languages from './languages';
import Proficiences from './proficiencies';
import Skills from './skills';

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
        <h2 onClick={() => this.toggleDisplay()}>Character Information</h2>
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