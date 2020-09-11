import React from 'react';
import './components/App';
import Mediacard from './components/Mediacard';

import '../stylesheets/App.css';
import '../stylesheets/index.css';

function App() {
  return (
    <div className='App'>
      <MediaCard />
    </div>
  );
}

export default App;

// Este código jsx no llegará al navegador, primero se convertirá.
