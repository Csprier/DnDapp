import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllConditions } from '../actions/conditionsActions';

// import '../css/conditions.css';

class Conditions extends Component {
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
    this.props.dispatch(listAllConditions());
  }

  render() {
    return (
      <div className="conditions">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Conditions</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions.conditions,
  loading: state.conditions.loading
});

export default connect(mapStateToProps)(Conditions);
