
import { useState } from 'react';
import Form from './Form';
import Preview from './Preview';

const App = () => {
  const [email, setEmail] = useState('');

  // Creamos la función updateEmail que le vamos a pasar a la hija Form
  // El componente Form ejecutará esta función cuando la usuaria cambie el email
  // Fragmento del fichero src/components/App.js

  const updateEmail = (value) => { // No recibo el evento entero, recibo solo el valor del input que es lo que me interesa
    setEmail(value);
  };
};

  return (
    <div>
      <h1>Generador de emails:</h1>
      <Form updateEmail={updateEmail} />
      <Preview email={email} />
    </div>
  );
};

export default App;