import React from 'react';

import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <h1 className="title">Your Local Weather</h1>
      <h3 className="sub-title">The weather in {props.place}</h3>
    </header>
  )
}

export default Header;
