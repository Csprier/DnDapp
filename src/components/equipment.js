import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllEquipment } from '../actions/equipmentActions';

// import '../css/equipment.css';

class Equipment extends Component {
  componentDidMount() {
    this.props.dispatch(listAllEquipment());
  }

  render() {
    return (
      <div className="equipment">
        <h3>Equipment</h3>
        <ul>
          {this.props.equipment.map((equipment, i) => {
            return (
              <li key={i} className="equipmentNode">
                <a href={equipment.url}>{equipment.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  equipment: state.equipment.equipment
});

export default connect(mapStateToProps)(Equipment);
