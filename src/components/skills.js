import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSkills } from '../actions/skillsActions';

import '../css/skills.css';

class Skills extends Component {
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
    this.props.dispatch(listAllSkills());
  }

  render() {
    return (
      <div className="skills">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Skills</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.skills.map((skill, i) => {
              return (
                <li key={i} className="skillNode">
                  <a href={skill.url}>{skill.name}</a>
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
  skills: state.skills.skills
});

export default connect(mapStateToProps)(Skills);
