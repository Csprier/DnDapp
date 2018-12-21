import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllRaces } from '../actions/racesActions';

// import '../css/races.css';
import '../css/toggleDisplay.css';

class Races extends Component {
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
    this.props.dispatch(listAllRaces());
  }

  render() {
    return (
      <div className="races">
        <h3 onClick={() =>this.toggleDisplay()}>Races</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.races.map((race, i) => {
              return (
                <li key={i} className="raceNode">
                  <a href={race.url}>{race.name}</a>
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
  races: state.races.races
});

export default connect(mapStateToProps)(Races);
