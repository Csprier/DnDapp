import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCharacterClasses, requestCharacterClassesSuccess, listAllClasses } from '../actions/characterClassActions';
import { toggleModal } from '../actions/modalActions';

import Modal from '../components/modal';

import '../css/classes.css';

class Classes extends Component {
  onClick() {
    this.props.dispatch(toggleModal(this.props.isOpen))
  }

  componentDidMount() {
    this.props.dispatch(requestCharacterClasses())
    this.props.dispatch(listAllClasses())
    this.props.dispatch(requestCharacterClassesSuccess())
  }

  render() {
    return (
      <div className="character-classes">
        <h2>Character classes</h2> 
        <button onClick={(e) => this.onClick()}>
          SEE CLASSES
        </button>
        <Modal show={this.props.isOpen}>
            {this.props.classes.map((classItem, i) => {
              return (
                <li key={i} className="classNode">
                  <a href={classItem.url}>{classItem.name}</a>
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
  classes: state.characterClasses.classes
});

export default connect(mapStateToProps)(Classes);
