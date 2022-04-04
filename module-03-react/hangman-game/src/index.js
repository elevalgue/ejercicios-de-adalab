import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';

ReactDOM.render(
  <HashRouter>
    <Header />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
