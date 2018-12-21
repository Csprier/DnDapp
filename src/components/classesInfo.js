import React, { Component } from 'react';

import Classes from './classes';
import Subclasses from './subClasses';
import Features from './features';
import Spellcasting from './spellCasting';
import StartingEquipment from './startingEquipment';

class ClassesInfo extends Component {
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
      <div className="classes-info-container">
        <h2 onClick={() =>this.toggleDisplay()}>Classes Information</h2>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <Classes />
          <Subclasses />
          <Features />
          <Spellcasting />
          <StartingEquipment />
        </div>
      </div> 
    );
  }
};

export default ClassesInfo;