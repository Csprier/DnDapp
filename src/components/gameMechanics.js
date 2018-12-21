import React, { Component } from 'react';

import Conditions from './conditions';
import DamageTypes from './damageTypes';
import MagicSchools from './magicSchools'

import '../css/toggleDisplay.css';

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
    // console.log('this.setState has occurred in toggleDisplay()');
  }

  render() {
    console.log('Display state is now: ', this.state.display);
    return (
      <div className="game-mechanics-info-container">
        <h2 onClick={() =>this.toggleDisplay()}>Game Mechanics</h2>
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