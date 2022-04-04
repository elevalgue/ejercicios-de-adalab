import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  // Creamos la constante de estado name con el valor inicial a string vacío
  const [name, setName] = useState('');
  const [familyName, setFamilyName] = useState('');

  // Creamos la función manejadora
  const handleName = ev => {
    // En la que guardamos el valor del input en name con setName
    setName(ev.target.value);
  };

  const handleNFamilyName = ev => {
    setFamilyName(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Escribe un nombre</label>

        {/* Creamos un evento de tipo change en este input que va a ser manejada por handleName */}
        <input type="name" name="name" id="name" placeholder="María" onChange={handleName} />

        {/* Usamos la constante name para pintarla en el HTML */}

        <label> y tu apellido please</label>
        <input type="familyName" name="familyName" id="familyName" placeholder="Carmona" onChange={handleNFamilyName}/>
        <p>Tu nombre y apellido son: {name} {familyName}</p>
      </form>
    </div>
  );
};

export default App;