import React from 'react';
import './card.css';

const Card = ({ emoji, heading, detail }) => (

  <div className="card">
    <img src={emoji} alt="emoji" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-btn " type="button">Learn More</button>
  </div>
);

export default Card;
