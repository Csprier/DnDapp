import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllRaces } from '../actions/racesActions';

// import '../css/races.css';

class Races extends Component {
  componentDidMount() {
    this.props.dispatch(listAllRaces());
  }

  render() {
    return (
      <div className="races">
        <h3>Races</h3>
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
    );
  }
}

const mapStateToProps = state => ({
  races: state.races.races
});

export default connect(mapStateToProps)(Races);
