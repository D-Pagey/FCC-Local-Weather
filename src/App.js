import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Image from './components/Image';
import Data from './components/Data';
import Footer from './components/Footer';
import getUrl from './utilities/Location';

class App extends Component {
  state = {
    temp: 'loading',
    max: 'loading',
    min: 'loading',
    description: 'loading',
    main: '',
    place: 'loading',
    units: 'C',
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    getUrl().then((url) => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
          temp: Math.floor(data.main.temp),
          max: Math.floor(data.main.temp_max),
          min: Math.floor(data.main.temp_min),
          description: data.weather[0].description,
          main: data.weather[0].main,
          place: data.name,
        }))

        .catch((error) => {
          console.log(`Something went wrong ${error}`);
        });
    });
  }

  handleClick() {
    const { units } = this.state;

    units === 'C'
      ? this.setState(prevState => ({
        units: 'F',
        temp: (prevState.temp * 1.8) + 32,
        max: (prevState.max * 1.8) + 32,
        min: (prevState.min * 1.8) + 32,
      }))
      : this.setState(prevState => ({
        units: 'C',
        temp: Math.round(((prevState.temp - 32) / 1.8) * 100) / 100,
        max: Math.round(((prevState.max - 32) / 1.8) * 100) / 100,
        min: Math.round(((prevState.min - 32) / 1.8) * 100) / 100,
      }));
  }

  render() {
    const {
      place, main, temp, max, min, description, units,
    } = this.state;

    return (
      <div className="app">
        <Modal />
        <Header place={place} />
        <Image main={main} />
        <Data
          temp={temp}
          max={max}
          min={min}
          description={description}
          handleClick={this.handleClick}
          units={units}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
