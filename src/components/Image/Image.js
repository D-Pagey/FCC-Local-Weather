import React from 'react';

import './Image.css';

function Image(props) {
  return (
    <div className={'img-container ' + props.main}></div>
  )
}

export default Image;
