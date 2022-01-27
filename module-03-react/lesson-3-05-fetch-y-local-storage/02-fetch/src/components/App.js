import '../styles/App.scss';

// Fichero src/components/App.js
// importamos useEffect además de useState
import { useEffect, useState } from 'react';

const App = () => {
  useEffect(() => {
    fetch('https://swapi.dev/api/people/5')
      .then(response => response.json())
      .then(responseData => {
        setStarWarsData(responseData);
      });
  }, []);

  return (
    <div>
      ...
    </div>
  );
};

export default App;