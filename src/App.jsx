import React, { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './app.css';
import Intro from './Components/intro/Intro';
import Services from './Components/services/Services';
import Work from './Components/Works/Work';
import Experience from './Components/experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from '../public/Context';
/*  main components */

const App = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',

      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
