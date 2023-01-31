import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import './intro.css';
import { themeContext } from '../../../public/Context';

const crown = ('../../img/crown.png');
const thumbsUp = ('../../img/thumbup.png');
const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am</span>
          <span>
            Partha Sarathi Roy
          </span>
          <span>
            I am an enthusiastic and
            dedicated entry level
            front-end developer with a
            passion for creating
            innovative and engaging web
            experiences. I'm excited to
            contribute my skills to help
            create powerful and
            meaningful web applications.
          </span>
        </div>
        <button type="button" className="i-btn btn">
          Hire Me
        </button>
        <div className="i-icons">
          <a
            href="https://github.com/Darkpanda-xd"
            target="_blank"
            rel="noreferrer"
          >

            <img
              src="../img/github.png"
              alt="github"
            />
          </a>

          <a href="https://www.linkedin.com/in/the-partha-sarathi-roy/">
            <img
              src="../img/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/vermilion_ocu.lus/">

            <img
              src="../img/instagram.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img
          src="./img/Vector1.png"
          alt="vector img"
        />
        <img
          src="./img/Vector2.png"
          alt="vector img"
        />
        <img
          src="./img/boy.png"
          alt="vector img"
        />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src="./img/glassesimoji.png"
          alt="emoji"
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '60%' }}
          style={{ top: '-4%', left: '68%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '5rem' }}
          transition={transition}
          style={{ top: '18rem' }}
          className="floating-div"
        >
          <FloatingDiv image={thumbsUp} text1="Best" text2="Design" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255' }} />
        <div
          className="blur"
          style={{
            background: '#c1f5ff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
