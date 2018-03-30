import React, { Component } from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Your Local Weather</h1>
      <h3 className="sub-title">The weather in <span id="place">London</span></h3>
    </header>
  )
}

export default Header;
