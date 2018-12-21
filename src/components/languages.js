import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllLanguages } from '../actions/languagesActions';

import '../css/languages.css';

class Languages extends Component {
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
    this.props.dispatch(listAllLanguages());
  }

  render() {
    return (
      <div className="languages">
        <h3 onClick={() =>this.toggleDisplay()}>Languages</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  languages: state.languages.languages
});

export default connect(mapStateToProps)(Languages);
