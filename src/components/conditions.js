import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestConditions, requestConditionsSuccess, listAllConditions } from '../actions/conditionsActions';

// import '../css/conditions.css';

class Conditions extends Component {
  componentDidMount() {
    this.props.dispatch(requestConditions())
    this.props.dispatch(listAllConditions())
    this.props.dispatch(requestConditionsSuccess())
  }

  render() {
    return (
      <div className="conditions">
        <h3>Conditions</h3>
        <ul>
          {this.props.conditions.map((condition, i) => {
            return (
              <li key={i} className="conditionNode">
                <a href={condition.url}>{condition.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions.conditions,
  loading: state.conditions.loading
});

export default connect(mapStateToProps)(Conditions);
