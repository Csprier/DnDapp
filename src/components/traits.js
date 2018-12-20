import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllTraits } from '../actions/traitsActions';

// import '../css/traits.css';

class Traits extends Component {
  componentDidMount() {
    this.props.dispatch(listAllTraits());
  }

  render() {
    return (
      <div className="traits">
        <h3>Traits</h3>
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
    );
  }
}

const mapStateToProps = state => ({
  traits: state.traits.traits
});

export default connect(mapStateToProps)(Traits);
