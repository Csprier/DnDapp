import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSkills } from '../actions/skillsActions';

import '../css/skills.css';

class Skills extends Component {
  componentDidMount() {
    this.props.dispatch(listAllSkills());
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
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
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills.skills
});

export default connect(mapStateToProps)(Skills);
