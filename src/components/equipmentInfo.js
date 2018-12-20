import React, { Component } from 'react';

import Equipment from './equipment';
import StartingEquipment from './startingEquipment';

class EquipmentInfo extends Component {
  render() {
    return (
      <div className="equipment-info-container">
        <h2>Equipment</h2>
        <StartingEquipment />
        <Equipment />
      </div>
    );
  }
};

export default EquipmentInfo;