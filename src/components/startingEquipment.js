import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllStartingEquipment } from '../actions/startingEquipmentActions';

// import '../css/startingEquipment.css';

class StartingEquipment extends Component {
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
    this.props.dispatch(listAllStartingEquipment());
  }

  render() {
    return (
      <div className="starting-equipment">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Starting Equipment</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startingEquipment: state.startingEquipment.startingEquipment
});

export default connect(mapStateToProps)(StartingEquipment);
