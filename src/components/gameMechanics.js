import React, { Component } from 'react';

import Conditions from './conditions';
import DamageTypes from './damageTypes';
import MagicSchools from './magicSchools'

import '../css/gameMechanics.css';
import '../css/toggleDisplay.css';
import '../css/dashboard.css';

class GameMechanics extends Component {
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
  }

  render() {
    console.log('Display state is now: ', this.state.display);
    return (
      <div className="game-mechanics-info-container menuitem">
        <div className="gm-header" onClick={() =>this.toggleDisplay()}>
          <h3>Game Mechanics</h3>
          {/* <p>&#8964;</p> */}
        </div>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <Conditions />
          <DamageTypes />
          <MagicSchools />
        </div>
      </div>
    );
  }
};

export default GameMechanics;