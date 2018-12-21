import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllProficiencies } from '../actions/proficienciesActions';

import '../css/proficiencies.css';

class Proficiencies extends Component {
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
    this.props.dispatch(listAllProficiencies());
  }

  render() {
    return (
      <div className="proficiencies">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Proficiencies</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  proficiencies: state.proficiencies.proficiencies
});

export default connect(mapStateToProps)(Proficiencies);
// export default connect()(Proficiencies);