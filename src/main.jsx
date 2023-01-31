import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '../public/Context';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <App />
  </ThemeProvider>,

);
