import React, { Component } from 'react';

import Races from './races';
import SubRaces from './subRaces.js';
import Traits from './traits';

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
        <h2 onClick={() =>this.toggleDisplay()}>Races Information</h2>
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