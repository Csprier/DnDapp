import React, { Component } from 'react';

import Equipment from './equipment';
import StartingEquipment from './startingEquipment';

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
      <div className="equipment-info-container">
        <h2 onClick={() =>this.toggleDisplay()}>Equipment</h2>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <StartingEquipment />
          <Equipment />
        </div>
      </div>
    );
  }
};

export default EquipmentInfo;