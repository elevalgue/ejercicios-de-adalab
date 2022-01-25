import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [cebollista, setCebollista] = useState(false); 
  const handleCheckbox = ev => {
    // ev.preventDefault();
    if (setCebollista(ev.target.checked) === true) {

      
    } else {
      
    }
    
  } 
  return (
    <div className="App">
      <h1 className="title">Selecciona los ingredientes de la tortilla de patatas</h1>
      <form >
        <label htmlFor="macarrones">Macarrones</label>
        <input type="checkbox" name="macarrones" id="macarrones"/>
        <label htmlFor="cebollista">Patatas</label>
        <input type="checkbox" name="patatas" id="cebollista" onChange={handleCheckbox}/>
        <label htmlFor="nueces">Nueces</label>
        <input type="checkbox" name="nueces" id="nueces"/>
        <label htmlFor="cebollista">Huevos</label>
        <input type="checkbox" name="huevos" id="cebollista" onChange={handleCheckbox}/>
        <label htmlFor="cebollista">Cebolla</label>
        <input type="checkbox" name="cebolla" id="cebollista" onChange={handleCheckbox}/>
        <label htmlFor="cerveza">Cerveza</label>
        <input type="checkbox" name="cerveza" id="cerveza"/>
      </form>
      <p>{cebollista === true ? 'Eres una persona concebollista' : 'Eres un robot sin paladar'}</p>
    </div>
  );
}

export default App;