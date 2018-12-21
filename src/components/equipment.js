import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllEquipment } from '../actions/equipmentActions';

// import '../css/equipment.css';
import '../css/toggleDisplay.css';

class Equipment extends Component {
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
  
  componentDidMount() {
    this.props.dispatch(listAllEquipment());
  }

  render() {
    return (
      <div className="equipment">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Equipment</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  equipment: state.equipment.equipment
});

export default connect(mapStateToProps)(Equipment);
