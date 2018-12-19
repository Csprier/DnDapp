import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCharacterClasses, requestCharacterClassesSuccess, listAllClasses } from '../actions/characterClassActions';

import '../css/classes.css';

class Classes extends Component {
  componentDidMount() {
    this.props.dispatch(requestCharacterClasses())
    this.props.dispatch(listAllClasses())
    this.props.dispatch(requestCharacterClassesSuccess())
  }

  render() {
    return (
      <div className="character-classes">
        <h3>Character classes</h3>
        <ul>
          {this.props.classes.map((classItem, i) => {
            return (
              <li key={i} className="classNode">
                <a href={classItem.url}>{classItem.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.characterClasses.classes
});

export default connect(mapStateToProps)(Classes);
