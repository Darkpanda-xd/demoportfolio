import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
import './services.css';
import { themeContext } from '../../../public/Context';

const heartEmoji = '../../img/heartemoji.png';
const glasses = '../../img/glasses.png';
const humble = '../../img/humble.png';

const Services = () => {
  const transition = {
    type: 'spring',
    duration: 1,
  };
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? ' white' : '' }}>My awesome</span>
        <span>Services</span>
        <span>
          Sed eos et ipsum takimata
          dolor sanctus. Et dolore et
          vero sanctus labore est,
          consetetur aliquyam sed
          takimata et lorem.
          <br />
          Justo et sanctus voluptua ut
          et aliquyam et ea, vero.
        </span>
        <a href="../../resume/resume.pdf" download>
          <button type="button" className="btn s-btn">

            Download CV
          </button>
        </a>

        {/* blur div */}
        <div
          className="blur s-blur1"
          style={{
            background: ' #abf1ff94',
          }}
        />
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transtion={transition}
          style={{ left: '14rem' }}
        >
          <Card
            emoji={heartEmoji}
            heading="Design"
            detail="Photoshop,Figma,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        </motion.div>
        <motion.div
          initial={{ left: '-25rem' }}
          whileInView={{ left: '-4rem' }}
          transtion={transition}
          style={{
            top: '12rem',
            left: '-4rem',
          }}
        >
          <Card
            emoji={glasses}
            heading="Developer"
            detail="Html, CSS, JavaScript, Bootstrap, React.js, Reactstrap"
          />
        </motion.div>
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transtion={transition}
          style={{
            top: '20rem',
            left: '12rem',
          }}
        >
          <Card
            emoji={humble}
            heading="UI/UX"
            detail="Takimata et invidunt eirmod lorem. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }} />
      </div>
    </div>
  );
};

export default Services;
