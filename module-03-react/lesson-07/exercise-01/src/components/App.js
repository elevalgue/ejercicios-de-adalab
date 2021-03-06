import React, { useState } from 'react';
import '../stylesheets/App.css';

function App() {
  const [age, setAge] = useState(20);

  const handleAge = () => {
    setAge(age + 1);
  };
}

return (
  <div className='App'>
    <p>Hoy tengo {age} años de edad.</p>
    <button type='button' onClick={handleAge}>
      Hazme más viejo
    </button>
  </div>
);

export default App;
