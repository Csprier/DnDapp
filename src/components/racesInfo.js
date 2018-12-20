import React, { Component } from 'react';

import Races from './races';
import SubRaces from './subRaces.js';
import Traits from './traits';

class RacesInfo extends Component {
  render() {
    return (
      <div className="races-info-container">
        <h2>Races</h2>
        <Races />
        <SubRaces />
        <Traits />
      </div>
    );
  }
};

export default RacesInfo;