import React, { Component } from 'react';

import Classes from './classes';
import Subclasses from './subClasses';
import Features from './features';
import Spellcasting from './spellCasting';
import StartingEquipment from './startingEquipment';

import '../css/classesInfo.css';
import '../css/toggleDisplay.css';
import '../css/dashboard.css';

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
      <div className="classes-info-container menuitem">
        <div className="classes-info-header" onClick={() =>this.toggleDisplay()}>
          <h3>Classes</h3>
          {/* <p>&#8964;</p> */}
        </div>
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