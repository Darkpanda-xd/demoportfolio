import React from 'react';
import './floatingDiv.css';

const FloatingDiv = ({ image, text1, text2 }) => {

  return (
  <div className="floating-div">
    <img src={image} alt="crown" />
    <span>
      {text1}
      <br />
      {text2}

    </span>

  </div>
)};

export default FloatingDiv;
