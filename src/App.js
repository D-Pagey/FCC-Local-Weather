import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';
import Footer from './components/Footer';
import getUrl from './utilities/Location.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 'loading',
      max: 'loading',
      min: 'loading',
      description: 'loading',
      main: '',
      place: 'loading',
      units: 'C',
      isLoading: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.fetchData();
  }

  fetchData() {
    getUrl().then(url => {
      fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        temp: Math.floor(data.main.temp),
        max: Math.floor(data.main.temp_max),
        min: Math.floor(data.main.temp_min),
        description: data.weather[0].description,
        main: data.weather[0].main,
        place: data.name,
        isLoading: false
      }))

      .catch(function(error) {
        console.log("Something went wrong");
      })
    });
  }

  handleClick() {
    (this.state.units === 'C' ?
    this.setState(prevState => ({
      units: 'F',
      temp: (prevState.temp * 1.8) + 32,
      max: (prevState.max * 1.8) + 32,
      min: (prevState.min * 1.8) + 32
    })) :
    this.setState(prevState => ({
      units: 'C',
      temp: Math.round(((prevState.temp - 32) / 1.8) * 100) / 100,
      max: Math.round(((prevState.max - 32) / 1.8) * 100) / 100,
      min: Math.round(((prevState.min - 32) / 1.8) * 100) / 100
    }))
    );
  }

  render() {
    return (
      <div className="app">
        <Modal />
        <Header place={this.state.place} />
        <Image main={this.state.main} />
        <Data
          temp={this.state.temp}
          max={this.state.max}
          min={this.state.min}
          description={this.state.description}
          handleClick={this.handleClick}
          units={this.state.units} />
        <Footer />
      </div>
    );
  }
}

export default App;
