import React from 'react';

import './Header.css';

function Header({place}) {
  return (
    <header className="header">
      <h1 className="title">Your Local Weather</h1>
      <h3 className="sub-title">The weather in {place}</h3>
    </header>
  )
}

export default Header;
