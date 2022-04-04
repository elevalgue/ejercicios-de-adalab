import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('sumar')

  const handleNumberA = ev => {
    console.log(ev.target.value);
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    console.log(ev.target.value);
    setNumberB(ev.target.value);
  };

  const handleOperation = ev => {
    const target = ev.currentTarget;
    setOperation(target.value);
  };

  const getTotal = () => {
    let total = 0;
    if (operation === 'sumar') {
      total = parseInt(numberA) + parseInt(numberB)
    } else if (operation === 'restar') {
      total = parseInt(numberA) - parseInt(numberB)
    } else if (operation === 'multiplicar') {
      total = parseInt(numberA) * parseInt(numberB)
    } else if (operation === 'dividir') {
      total = parseInt(numberA) / parseInt(numberB)
    };
    return total;
  };

  const handleReset = () => {
    setNumberA(0)
    setNumberB(0)
    setOperation('sumar')
  }

  const handleSubmit = ev => {
    ev.preventDefault();
  };

    return (
      <div>
        <h1 className="title">La calculadora:</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='calculator'>
            Escribe un número:
            <input type="number" name="numberA" value={numberA} onChange={handleNumberA} />
          </label>
          <label>
            Escribe otro número:
            <input type="number" name="numberB" value={numberB} onChange={handleNumberB} />
          </label>
          <select onChange={handleOperation} value={operation}>
            <option value="sumar">sumar</option>
            <option value="restar">restar</option>
            <option value="multiplicar">multiplicar</option>
            <option value="dividir">dividir</option>
          </select> 
          <button onClick={handleReset}>Resetear</button> 
        </form>
        <p>
          Resultado: {getTotal()}</p>
      </div>
    );
};

export default App;
