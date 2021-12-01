import '../styles/App.scss';
import { useState } from 'react'; 

function App() {
  const [counter, setCounter] = useState(0); 
  return (
    <div className="App">
      <h1 className="title">Contador</h1>
      <p>Contador: </p>
    </div>
  );
}

export default App;
