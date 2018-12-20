import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/loader.css';

class Loader extends Component {
  componentDidMount() {
    console.log('Loader engage!');
  }

  render() {
    return (
      <div class="lds-ripple">
        
        <div>
        
        </div>
        
        <div>
        
        </div>

      </div>
    );
  }
}

export default connect()(Loader);