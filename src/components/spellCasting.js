import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSpellCasting } from '../actions/spellCastingActions';

// import '../css/spellCasting.css';

class SpellCasting extends Component {
  componentDidMount() {
    this.props.dispatch(listAllSpellCasting());
  }

  render() {
    return (
      <div className="spellcasting">
        <h3>Spellcasting</h3>
        <ul>
          {this.props.spellCasting.map((charClass, i) => {
            return (
              <li key={i} className="charClassNode">
                <a href={charClass.url}>{charClass.class}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spellCasting: state.spellCasting.spellCasting
});

export default connect(mapStateToProps)(SpellCasting);