import React, { Component } from 'react';

import './Data.css';

class Data extends Component{
  render() {
    return (
      <main className="data-container">
        <ul className="list">
          <li>Temperature:</li>
          <li>Description:</li>
          <li>Temp High:</li>
          <li>Temp Low:</li>
        </ul>
        <button>Toggle C/F</button>
      </main>
    )
  }
}

export default Data;
