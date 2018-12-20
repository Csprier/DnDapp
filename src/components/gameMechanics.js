import React, { Component } from 'react';

import Conditions from './conditions';
import DamageTypes from './damageTypes';
import MagicSchools from './magicSchools'

class GameMechanics extends Component {
  render() {
    return (
      <div className="game-mechanics-info-container">
        <h2>Game Mechanics</h2>
        <Conditions />
        <DamageTypes />
        <MagicSchools />
      </div>
    );
  }
};

export default GameMechanics;