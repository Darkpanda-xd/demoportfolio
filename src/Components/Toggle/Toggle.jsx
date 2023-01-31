import React, { useContext } from 'react';
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../../public/Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const handelClick = () => {
    theme.dispatch({ type: 'toggle' });
  };
  return (
    <div className="toggle" onClick={handelClick}>
      <Moon />
      <Sun />
      <div className="t-btn" style={darkMode ? { left: '2px' } : { right: '2px' }} />
    </div>
  );
};

export default Toggle;
