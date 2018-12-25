import React, { Component } from 'react';

import CharacterInfo from './characterInfo';
import ClassesInfo from './classesInfo';
import EquipmentInfo from './equipmentInfo';
import GameMechanics from './gameMechanics';
import RacesInfo from './racesInfo';

import '../css/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="scroll-menu">
          <GameMechanics />
          <CharacterInfo />
          <ClassesInfo />
          <RacesInfo />
          <EquipmentInfo />
        </div>
      </div>
    );
  }
};

export default Dashboard;
