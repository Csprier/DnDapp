import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllDamageTypes } from '../actions/damageTypesActions';

// import '../css/skills.css';

class DamageTypes extends Component {
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
    this.props.dispatch(listAllDamageTypes());
  }

  render() {
    return (
      <div className="damage-types">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Damage Types</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.damageTypes.map((type, i) => {
              return (
                <li key={i} className="typeNode">
                  <a href={type.url}>{type.name}</a>
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
  damageTypes: state.damageTypes.damageTypes
});

export default connect(mapStateToProps)(DamageTypes);
