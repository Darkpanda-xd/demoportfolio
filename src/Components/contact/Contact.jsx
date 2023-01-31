import React, { useRef, useState, useContext } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../../public/Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xakw284', 'template_nfsxdlm', form.current, '1kL5bvHokWVkkhTOO')
      .then((result) => {
    
        setDone(true);
      }, (error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: '#aef1ff94' }} />
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" className="user" />
          <input type="email" placeholder="Email" className="user" name="user_email" required />
          <textarea name="message" className="user" placeholder="message" />
          <input type="submit" value="send" className="btn" />
          <span className={`${done ? 'valid' : done}`}>
            {' '}
            {done && 'Thanks for contacting me'}
          </span>
          <div className="blur c-blur1" style={{ background: 'var(--purple)' }} />
        </form>
      </div>

    </div>
  );
};

export default Contact;
