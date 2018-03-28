import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Image />
        <Data />
        <Footer />
      </div>
    );
  }
}

export default App;
