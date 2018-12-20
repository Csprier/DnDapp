import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllStartingEquipment } from '../actions/startingEquipmentActions';

// import '../css/startingEquipment.css';

class StartingEquipment extends Component {
  componentDidMount() {
    this.props.dispatch(listAllStartingEquipment());
  }

  render() {
    return (
      <div className="starting-equipment">
        <h3>Starting Equipment</h3>
        <ul>
          {this.props.startingEquipment.map((equipment, i) => {
            return (
              <li key={i} className="equipmentNode">
                <a href={equipment.url}>{equipment.class}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startingEquipment: state.startingEquipment.startingEquipment
});

export default connect(mapStateToProps)(StartingEquipment);
