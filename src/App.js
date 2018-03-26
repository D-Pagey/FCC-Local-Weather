import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Data from './components/Data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Data />
      </div>
    );
  }
}

export default App;
