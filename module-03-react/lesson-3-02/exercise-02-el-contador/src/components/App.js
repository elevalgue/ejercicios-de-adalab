import '../styles/App.scss';
import { useState } from 'react'; 

function App() {
  const [counter, setCounter] = useState(0);
  
  const handleCounter = e => {
    setCounter(counter + 1); 
  }
  return (
    <div className="App">
      <h1 className="title">Contador</h1>
      <p>Y vamos por... {counter}</p>
      <button onClick={handleCounter}>Clica aquí que sube al contador</button>
    </div>
  );
}

export default App;
