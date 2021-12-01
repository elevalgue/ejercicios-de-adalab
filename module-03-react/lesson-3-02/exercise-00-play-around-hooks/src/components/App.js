import '../styles/App.scss';
import { useState } from 'react'; 

const App = () => {
  const [name, setName] = useState('Maricamen'); 
  const handleInput = (e) => {
    console.log(`El nombre de la usuaria es: ${name}, ${e.key}`);
    setName(''); 
  }

  return (
  <div className="App">
      <h1 className="title">Hola mundo</h1>
      <form>
        <label>Nombre</label>
        <input type="text" name="input" id="" onKeyUp={handleInput}></input>
      </form>
    </div>
  );
}

export default App;
