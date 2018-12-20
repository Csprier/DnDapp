import React, { Component } from 'react';

import CharacterInfo from './characterInfo';
import ClassesInfo from './classesInfo';
import EquipmentInfo from './equipmentInfo';
import GameMechanics from './gameMechanics';
import RacesInfo from './racesInfo';


// import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <GameMechanics />
        <CharacterInfo />
        <ClassesInfo />
        <RacesInfo />
        <EquipmentInfo />
      </div>
    );
  }
};

export default Dashboard;
