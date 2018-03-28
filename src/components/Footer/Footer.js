import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Written and coded by <a href="https://www.freecodecamp.org/d-pagey"
          target="_blank" rel="noopener noreferrer" className="freecodecamp">
          Pagey</a></p>
      </footer>
    )
  }
}

export default Footer;
