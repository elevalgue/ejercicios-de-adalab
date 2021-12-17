import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [patatas, setPatatas] = useState('');
  const [cebolla, setCebolla] = useState('');
  const [huevos, setHuevos] = useState('');

  const handleIngredient = (ev) => {
    if (ev.target.id === 'patatas') {
      setPatatas(ev.target.checked);
    } else if (ev.target.id === 'cebolla') {
      setCebolla(ev.target.checked);
    } else {
      setHuevos(ev.target.checked);
    }
  };

  const renderMessage = () => {
    if (patatas && cebolla && huevos) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action=''>
        <label htmlFor=''>
          <input type='checkbox' name='macarrones' id='1' />
          Macarrones
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='patatas'
            id='patatas'
            onChange={handleIngredient}
          />
          Patatas
        </label>
        <label htmlFor=''>
          <input type='checkbox' name='nueces' id='3' />
          Nueces
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='huevos'
            id='huevos'
            onChange={handleIngredient}
          />
          Huevos
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='cebolla'
            id='cebolla'
            onChange={handleIngredient}
          />
          Cebolla
        </label>
        <label htmlFor=''>
          <input type='checkbox' name='cerveza' id='6' />
          Cerveza
        </label>
      </form>
      <p>{renderMessage()}</p>
      <button>Marcar todos</button>
      <button>Desmarcar todos</button>
    </div>
  );
}

export default App;
