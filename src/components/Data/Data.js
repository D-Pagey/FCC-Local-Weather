import React from 'react';

import './Data.css';

function Data(props) {

  const { temp, description, max, min, handleClick, units } = props;

  return (
    <main className="data-container">
      <ul className="list">
        <li><span className="stat">Temperature: </span>
        <span className="value">{temp} {units}</span></li>
        <li><span className="stat">Description: </span>
        <span className="value">{description}</span></li>
        <li><span className="stat">Temp High: </span>
        <span className="value">{max} {units}</span></li>
        <li><span className="stat">Temp Low: </span>
        <span className="value">{min} {units}</span></li>
      </ul>
      <button onClick={handleClick} className="button">
        Toggle &deg;C / F</button>
    </main>
  )
}

export default Data;
