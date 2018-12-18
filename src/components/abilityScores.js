import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAbilityScores, requestAbilityScoresSuccess, listAllAbilityScores } from '../actions/abilityScoresActions';
import { toggleModal } from '../actions/modalActions';

import Modal from '../components/modal';

import '../css/abilityScores.css';

class AbilityScores extends Component {
  onClick() {
    this.props.dispatch(toggleModal(this.props.isOpen))
  }

  componentDidMount() {
    this.props.dispatch(requestAbilityScores())
    this.props.dispatch(listAllAbilityScores())
    this.props.dispatch(requestAbilityScoresSuccess())
  }

  render() {
    return (
      <div className="ability-scores">
        <h2>Ability scores</h2>
        <button onClick={(e) => this.onClick()}>
          SEE CLASSES
        </button>
        <Modal show={this.props.isOpen} index={2}>
          {this.props.abilityScores.map((score, i) => {
            return (
              <li key={i} className="scoreNode">
                <a href={score.url}>{score.name}</a>
              </li>
            );
          })}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.isOpen.isOpen,
  abilityScores: state.abilityScores.abilityScores
});

export default connect(mapStateToProps)(AbilityScores);
