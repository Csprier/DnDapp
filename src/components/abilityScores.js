import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllAbilityScores } from '../actions/abilityScoresActions';

import '../css/abilityScores.css';

class AbilityScores extends Component {
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
    this.props.dispatch(listAllAbilityScores());
  }

  render() {
    return (
      <div className="ability-scores">
        <h3 onClick={() =>this.toggleDisplay()}>Ability scores</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.abilityScores.map((score, i) => {
              return (
                <li key={i} className="scoreNode">
                  <a href={score.url}>{score.name}</a>
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
  abilityScores: state.abilityScores.abilityScores,
  ms: state.abilityScores
});

export default connect(mapStateToProps)(AbilityScores);
