import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllMagicSchools } from '../actions/magicSchoolsActions';

// import '../css/magicSchools.css';

class MagicSchools extends Component {
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
    this.props.dispatch(listAllMagicSchools());
  }

  render() {
    return (
      <div className="magic-schools">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Magic Schools</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.magicSchools.map((school, i) => {
              return (
                <li key={i} className="schoolNode">
                  <a href={school.url}>{school.name}</a>
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
  magicSchools: state.magicSchools.magicSchools,
  ms: state.magicSchools
});

export default connect(mapStateToProps)(MagicSchools);
