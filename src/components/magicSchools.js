import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllMagicSchools } from '../actions/magicSchoolsActions';

// import '../css/magicSchools.css';

class MagicSchools extends Component {
  componentDidMount() {
    this.props.dispatch(listAllMagicSchools())
  }

  render() {
    return (
      <div className="magic-schools">
        <h3>Magic Schools</h3>
        <ul>
          {this.props.magicSchools.map((school, i) => {
            return (
              <li key={i} className="schoolNode">
                <a href={school.url}>{school.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  magicSchools: state.magicSchools.magicSchools,
  ms: state.magicSchools
});

export default connect(mapStateToProps)(MagicSchools);
