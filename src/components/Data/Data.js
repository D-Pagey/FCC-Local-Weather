import React, { Component } from 'react';

import './Data.css';

class Data extends Component{
  render() {
    return (
      <main className="data-container">
        <ul className="list">
          <li><span className="stat">Temperature: </span>
          <span className="value">{this.props.temp} &deg;C</span></li>
          <li><span className="stat">Description: </span>
          <span className="value">{this.props.description}</span></li>
          <li><span className="stat">Temp High: </span>
          <span className="value">{this.props.max} &deg;C</span></li>
          <li><span className="stat">Temp Low: </span>
          <span className="value">{this.props.min} &deg;C</span></li>
        </ul>
        <button className="button">Toggle &deg;C / F</button>
      </main>
    )
  }
}

export default Data;
