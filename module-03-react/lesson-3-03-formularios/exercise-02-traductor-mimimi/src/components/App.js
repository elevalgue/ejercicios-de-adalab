import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [translation, setTranslation] = useState('');
  
  const handleTranslation = ev => {
    const translation = ev.currentTarget.value;
    return setTranslation(translation.replaceAll(/[aeiou]/g, 'i')); 
  };

  return (
    <div className="App">
      <h1 className="title">Traductor MIMIMI</h1>
      <form className="form">
        <label htmlFor="translation">Escribe tu texto aquí</label>
        <textarea id="translation" onChange={handleTranslation}></textarea>
        <p>{translation}</p>
      </form>
    </div>
  );
};

export default App;
