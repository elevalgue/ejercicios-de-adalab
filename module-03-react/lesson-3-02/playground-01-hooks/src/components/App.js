import '../styles/App.scss';
import { useState } from 'react'; 

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = e => {
    const inputValueA = e.target.value;
    setNumberA(inputValueA); 
  }

  const handleNumberB = e => {
    const inputValueB = e.target.value;
    setNumberB(inputValueB); 
  }

  const total = parseInt(numberA) + parseInt(numberB); 

  return (
  <div className="App">
      <h1 className="title">Calculadora</h1>
      <form>
        <label>
          Escribe un número:
          <input className="form__input-numberA" type="number" name="numberA" onChange={handleNumberA}></input>
        </label>
        <label>
          Escribe otro número:
          <input className="form__input-numberB" type="number" name="numberB" onChange={handleNumberB}></input>
        </label>
      </form>
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
