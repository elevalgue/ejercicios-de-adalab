import '../styles/App.scss';
import { useState } from 'react'; 

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncreament = e => {
    setCounter(counter + 1); 
  }

  const handleReduction = e => {
    setCounter(counter - 1); 
  }

  const handleReset = e => {
    setCounter(0); 
  }

  return (
    <div className="App">
      <h1 className="title">Contador</h1>
      <p>Y vamos por... {counter}</p>
      <button onClick={handleIncreament}>➕ 1️</button>
      <button onClick={handleReduction}>➖ 1️</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
