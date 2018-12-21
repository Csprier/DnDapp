import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAllSpellCasting } from '../actions/spellCastingActions';

// import '../css/spellCasting.css';

class SpellCasting extends Component {
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
    this.props.dispatch(listAllSpellCasting());
  }

  render() {
    return (
      <div className="spellcasting">
        <h3 onClick={() =>this.toggleDisplay()}>Spellcasting</h3>
        <div className={(this.state.display) ? "expanded" : "hidden"}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spellCasting: state.spellCasting.spellCasting
});

export default connect(mapStateToProps)(SpellCasting);
