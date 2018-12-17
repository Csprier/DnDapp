import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProficiencies, requestProficienciesSuccess, listAllProficiencies } from '../actions/proficienciesActions';

import '../css/proficiencies.css';

class Proficiencies extends Component {
  componentDidMount() {
    this.props.dispatch(requestProficiencies())
    this.props.dispatch(listAllProficiencies())
    this.props.dispatch(requestProficienciesSuccess())
  }

  render() {
    console.log('this.props: ', this.props.proficiencies);
    return (
      <div className="proficiencies">
        <h2>Proficiencies</h2>
        <ul>
          {this.props.proficiencies.map((proficiency, i) => {
            return (
              <li key={i} className="proficiencyNode">
                <a href={proficiency.url}>{proficiency.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  proficiencies: state.proficiencies.proficiencies
});

export default connect(mapStateToProps)(Proficiencies);
// export default connect()(Proficiencies);