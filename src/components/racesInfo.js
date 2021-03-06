import React, { Component } from 'react';

import Races from './races';
import SubRaces from './subRaces.js';
import Traits from './traits';

import '../css/toggleDisplay.css';
import '../css/racesInfo.css';

class RacesInfo extends Component {
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
      <div className="races-info-container">
        <div className="races-info-header" onClick={() =>this.toggleDisplay()}>
          <h2>Races Information</h2>
          <p>&#8964;</p>
        </div>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <Races />
          <SubRaces />
          <Traits />
        </div>
      </div>
    );
  }
};

export default RacesInfo;