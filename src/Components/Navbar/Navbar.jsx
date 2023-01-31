import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import Toggle from '../Toggle/Toggle';

const Navbar = () => (
  <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">
        Partha
      </div>
      <Toggle />

    </div>
    <div className="n-right">
      <div className="n-list">

        <ul>
          <Link spy to="Navbar" smooth activeClass="activeClass">
            <li className="n-item">Home</li>
          </Link>
          <Link spy to="Services" smooth>
            <li className="n-item">Services</li>
          </Link>
          <Link spy to="Experience" smooth>
            <li className="n-item">Experience</li>
          </Link>
          <Link spy to="Portfolio" smooth>
            <li className="n-item">Portfolio</li>
          </Link>
          <Link spy to="Testimonial" smooth>
            <li className="n-item">Testimonial</li>
          </Link>
        </ul>

      </div>
      <button className="btn n-btn" type="button">
        Contact Me
      </button>
    </div>
  </div>
);

export default Navbar;
