import React, { Component } from 'react';

import Equipment from './equipment';

import '../css/equipmentInfo.css';
import '../css/toggleDisplay.css';
import '../css/dashboard.css';

class EquipmentInfo extends Component {
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
      <div className="equipment-info-container menuitem">
        <div className="classes-info-header" onClick={() =>this.toggleDisplay()}>
          <h3>Equipment</h3>
          {/* <p>&#8964;</p> */}
        </div>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <Equipment />
        </div>
      </div>
    );
  }
};

export default EquipmentInfo;