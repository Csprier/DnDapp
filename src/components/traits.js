import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllTraits } from '../actions/traitsActions';

// import '../css/traits.css';
import '../css/toggleDisplay.css';

class Traits extends Component {
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
    this.props.dispatch(listAllTraits());
  }

  render() {
    return (
      <div className="traits">
        <h3 onClick={() =>this.toggleDisplay()}>&#8964; Traits</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
          <ul>
            {this.props.traits.map((trait, i) => {
              return (
                <li key={i} className="traitNode">
                  <a href={trait.url}>{trait.name}</a>
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
  traits: state.traits.traits
});

export default connect(mapStateToProps)(Traits);
