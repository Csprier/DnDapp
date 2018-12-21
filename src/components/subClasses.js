import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSubClasses } from '../actions/subClassesActions';

import '../css/classes.css';

class SubClasses extends Component {
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
    this.props.dispatch(listAllSubClasses());
  }

  render() {
    return (
      <div className="sub-classes">
        <h3 onClick={() =>this.toggleDisplay()}>Sub Classes</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subClasses: state.subClasses.subClasses
});

export default connect(mapStateToProps)(SubClasses);
