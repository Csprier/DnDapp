import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAbilityScores, requestAbilityScoresSuccess, listAllAbilityScores } from '../actions/abilityScoresActions';

import '../css/abilityScores.css';

class AbilityScores extends Component {
  componentDidMount() {
    this.props.dispatch(requestAbilityScores())
    this.props.dispatch(listAllAbilityScores())
    this.props.dispatch(requestAbilityScoresSuccess())
  }

  render() {
    return (
      <div className="ability-scores">
        <h3>Ability scores</h3>
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
    );
  }
}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores.abilityScores
});

export default connect(mapStateToProps)(AbilityScores);
