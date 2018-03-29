import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';
import Footer from './components/Footer';

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

  showPosition(position) {
    console.log(position);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("Geolocation not supported");
      }
  }

  componentDidMount() {
    this.getLocation();
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
