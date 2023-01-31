import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './Work.css';
import { themeContext } from '../../../public/Context';

const upWork = '../../img/Upwork.png';
const fiverr = '../../img/fiverr.png';
const amazon = '../../img/amazon.png';
const facebook = '../../img/Facebook.png';
const shopify = '../../img/Shopify.png';

const Work = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Work for All these</span>
        <span>Projects</span>

        <span>
          Sed eos et ipsum takimata
          dolor sanctus. Et dolore et
          vero sanctus labore.
          <br />
          Justo et sanctus voluptua ut
          et aliquyam et ea, vero.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit, amet
          consecte.
        </span>
        <button className="btn s-btn">
          Hire Me
        </button>

        {/* blur div */}
        <div
          className="blur s-blur1"
          style={{
            background: ' #abf1ff94',
          }}
        />
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: 'spring' }}
          viewport={{ margin: '-40px' }}

          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src={upWork}
              alt="upWork"
            />
          </div>
          <div className="w-secCircle">
            <img
              src={fiverr}
              alt="fiverr"
            />
          </div>
          <div className="w-secCircle">
            <img
              src={amazon}
              alt="amazon"
            />
          </div>
          <div className="w-secCircle">
            <img
              src={shopify}
              alt="shopify"
            />
          </div>
          <div className="w-secCircle">
            <img
              src={facebook}
              alt="facebook"
            />
          </div>
          {/* bg circle */}

        </motion.div>
        <div className="w-bCircle blueCircle" />
        <div className="w-bCircle yellowCircle" />
      </div>
    </div>
  );
};

export default Work;
