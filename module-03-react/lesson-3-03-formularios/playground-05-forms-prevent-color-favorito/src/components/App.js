import { useState } from 'react';

const App = () => {
  const [colour, setColour] = useState('');

  const handleColour = ev => {
    setColour(ev.target.value);
  };
  
  const handleSubmit = ev => {
    ev.preventDefault()
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colour">Escribe tu color favorito, please ✨ </label>
        <input type="colour" name="colour" id="colour" onChange={handleColour}/>
        <p>A mí también me encanta el {colour}</p>
      </form>
    </div>
  )
}

export default App; 