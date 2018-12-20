import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSubRaces } from '../actions/subRacesActions';

// import '../css/subRaces.css';

class SubRaces extends Component {
  componentDidMount() {
    this.props.dispatch(listAllSubRaces());
  }

  render() {
    return (
      <div className="subraces">
        <h3>SubRaces</h3>
        <ul>
          {this.props.subRaces.map((subRace, i) => {
            return (
              <li key={i} className="subRaceNode">
                <a href={subRace.url}>{subRace.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subRaces: state.subRaces.subRaces
});

export default connect(mapStateToProps)(SubRaces);
