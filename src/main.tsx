import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
