import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDamageTypes, requestDamageTypesSuccess, listAllDamageTypes } from '../actions/damageTypesActions';

// import '../css/skills.css';

class DamageTypes extends Component {
  componentDidMount() {
    this.props.dispatch(requestDamageTypes())
    this.props.dispatch(listAllDamageTypes())
    this.props.dispatch(requestDamageTypesSuccess())
  }

  render() {
    return (
      <div className="damage-types">
        <h3>Damage Types</h3>
        <ul>
          {this.props.damageTypes.map((type, i) => {
            return (
              <li key={i} className="typeNode">
                <a href={type.url}>{type.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  damageTypes: state.damageTypes.damageTypes
});

export default connect(mapStateToProps)(DamageTypes);
