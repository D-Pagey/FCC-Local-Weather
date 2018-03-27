import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Image />
        <Data />
      </div>
    );
  }
}

export default App;
