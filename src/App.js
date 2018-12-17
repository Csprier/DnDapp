import React, { Component } from 'react';

import Classes from './components/classes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dungeons and Dragons 5th Edition App</h1>
        </header>
        <main>
          <Classes />
        </main>
      </div>
    );
  }
}

export default App;
