import '../styles/App.scss';
import { useState } from 'react'; 

const App = () => {
  const [email, setEmail] = useState('');
  const handleEmail = e => {
    const inputValue = e.target.value;
    setEmail(inputValue); 
  }

  return (
  <div className="App">
      <h1 className="title">Hola mundo</h1>
      <form>
        <label>Email
          <input className="form__input-text" type="email" name="email" id="email" onChange={handleEmail}></input>
        </label>
      </form>
      <p>Tu email es: {email}</p>
    </div>
  );
}

export default App;
