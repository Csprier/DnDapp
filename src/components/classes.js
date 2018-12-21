import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllClasses } from '../actions/characterClassActions';

import '../css/classes.css';

class Classes extends Component {
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
    this.props.dispatch(listAllClasses());
  }

  render() {
    return (
      <div className="character-classes">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Character classes</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  classes: state.characterClasses.classes
});

export default connect(mapStateToProps)(Classes);
