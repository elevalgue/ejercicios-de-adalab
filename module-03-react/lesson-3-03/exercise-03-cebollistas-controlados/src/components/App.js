import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [patatas, setPatatas] = useState('');
  const [cebolla, setCebolla] = useState('');
  const [huevos, setHuevos] = useState('');
  const [macarrones, setMacarrones] = useState(''); 
  const [nueces, setNueces] = useState('');
  const [cerveza, setCerveza] = useState('');
    
  const handleIngredient = (ev) => {
    if (ev.target.id === 'patatas') {
      setPatatas (ev.target.checked);
    } else if (ev.target.id === 'cebolla') {
      setCebolla (ev.target.checked);
    } else if (ev.target.id === 'huevos') {
      setHuevos (ev.target.checked);
    } else if (ev.target.id === 'macarrones') {
      setMacarrones (ev.target.checked);
    } else if (ev.target.id === 'nueces') {
      setNueces(ev.target.checked);
    } else if (ev.target.id === 'cerveza')
      setCerveza(ev.target.checked);
    }

  const renderMessage = () => {
      if (!(patatas && cebolla && huevos)) {
        return 'Eres un robot sin paladar';
        } else {
        return 'Eres una persona concebollista';
      }
    };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleCheck = () => {
    setPatatas(true)
    setPatatas(true);
    setCebolla(true);
    setMacarrones(true);
    setNueces(true);
    setCerveza(true);
    setPatatas(true);
  };

  const handleUncheck = () => {
    setPatatas(false)
    setPatatas(false);
    setCebolla(false);
    setMacarrones(false);
    setNueces(false);
    setCerveza(false);
    setPatatas(false);
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form  onSubmit={handleSubmit} action=''>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='macarrones'
            id='macarrones'
            checked={macarrones}
            onChange={handleIngredient}
          />
          Macarrones
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='patatas'
            id='patatas'
            checked={patatas}
            onChange={handleIngredient}
          />
          Patatas
        </label>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='nueces'
            id='nueces'
            checked={nueces}
            onChange={handleIngredient}
            />
          Nueces
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='huevos'
            id='huevos'
            checked={huevos}
            onChange={handleIngredient}
          />
          Huevos
        </label>
        <label htmlFor='tortilla'>
          <input
            type='checkbox'
            name='cebolla'
            id='cebolla'
            checked={cebolla}
            onChange={handleIngredient}
          />
          Cebolla
        </label>
        <label htmlFor=''>
          <input
            type='checkbox'
            name='cerveza'
            id='cerveza'
            checked={cerveza}
            onChange={handleIngredient}
            />
          Cerveza
        </label>
				<p>{renderMessage()}</p>
				<button className="button" onClick={handleCheck}>
					Marcar todos
				</button>
				<button className="button" onClick={handleUncheck}>
					Desmarcar todos
				</button>
			</form>
		</div>
	);
}

export default App;