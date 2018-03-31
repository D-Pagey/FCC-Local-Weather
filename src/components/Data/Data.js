import React, { Component } from 'react';

import './Data.css';

class Data extends Component{
  render() {
    return (
      <main className="data-container">
        <ul className="list">
          <li>Temperature: {this.props.temp}</li>
          <li>Description: {this.props.description}</li>
          <li>Temp High: {this.props.max}</li>
          <li>Temp Low: {this.props.min}</li>
        </ul>
        <button>Toggle C/F</button>
      </main>
    )
  }
}

export default Data;
