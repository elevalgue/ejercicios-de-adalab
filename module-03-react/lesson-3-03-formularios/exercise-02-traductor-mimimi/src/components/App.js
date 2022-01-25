import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [translation, setTranslation] = useState('');
  
  const handleTranslation = ev => {
    const translation = ev.currentTarget.value;
    return setTranslation(translation.replaceAll(/[aeiou]/g, 'i')); 
  };
  return (
    <div className="App">
      <h1 className="title">Traductor MIMIMI</h1>
      <form className="form">
        <label htmlFor="">Escribe tu texto aquí</label>
        <textarea id="" onChange={handleTranslation}></textarea>
        <p>{translation}</p>
      </form>
    </div>
  );
}

export default App;
