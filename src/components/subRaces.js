import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSubRaces } from '../actions/subRacesActions';

// import '../css/subRaces.css';

class SubRaces extends Component {
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
    this.props.dispatch(listAllSubRaces());
  }

  render() {
    return (
      <div className="subraces">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; SubRaces</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subRaces: state.subRaces.subRaces
});

export default connect(mapStateToProps)(SubRaces);
