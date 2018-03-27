import React, { Component } from 'react';

import './Image.css';
import weather from './default.jpg';

class Image extends Component {
  render() {
    return (
      <div className="img-container">
        <img src={weather} className="img" alt="Image of the weather" />
      </div>
    )
  }
}

export default Image;
