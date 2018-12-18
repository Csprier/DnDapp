import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLanguages, requestLanguagesSuccess, listAllLanguages } from '../actions/languagesActions';

import '../css/languages.css';

class Languages extends Component {
  componentDidMount() {
    this.props.dispatch(requestLanguages())
    this.props.dispatch(listAllLanguages())
    this.props.dispatch(requestLanguagesSuccess())
  }

  render() {
    return (
      <div className="languages">
        <h2>Languages</h2>
        <ul>
          {this.props.languages.map((language, i) => {
            return (
              <li key={i} className="languageNode">
                <a href={language.url}>{language.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  languages: state.languages.languages
});

export default connect(mapStateToProps)(Languages);