import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';
import Footer from './components/Footer';
import { getWeather } from './utilities/Location.js';

getWeather();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: '',
      max: '',
      min: '',
      description: '',
      units: 'c',
      isLoading: false
    }
  }

  componentDidMount() {

  }

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
