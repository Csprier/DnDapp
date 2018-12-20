import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSubClasses, requestSubClassesSuccess, listAllSubClasses } from '../actions/subClassesActions';

import '../css/classes.css';

class SubClasses extends Component {
  componentDidMount() {
    this.props.dispatch(requestSubClasses())
    this.props.dispatch(listAllSubClasses())
    this.props.dispatch(requestSubClassesSuccess())
  }

  render() {
    return (
      <div className="sub-classes">
        <h3>Sub Classes</h3>
        <ul>
          {this.props.subClasses.map((subClass, i) => {
            return (
              <li key={i} className="subClassNode">
                <a href={subClass.url}>{subClass.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subClasses: state.subClasses.subClasses
});

export default connect(mapStateToProps)(SubClasses);
