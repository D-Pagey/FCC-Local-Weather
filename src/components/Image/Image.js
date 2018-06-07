import React from 'react';

import './Image.css';

function Image({ main }) {
  return (
    <div className={'img-container ' + main}></div>
  )
}

export default Image;
