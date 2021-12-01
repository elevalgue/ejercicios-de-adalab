import '../styles/App.scss';
import { useState } from 'react'; 

const App = () => {
  const [email, setEmail] = useState('');
  const handleEmail = e => {
    const inputValue = e.target.value;
    console.log(`El email de la usuaria es: ${email}, ${e.target.value}`);
    setEmail(inputValue); 
  }

  return (
  <div className="App">
      <h1 className="title">Hola mundo</h1>
      <form>
        <label>Email</label>
        <input type="text" name="email" id="email" onKeyUp={handleEmail}></input>
      </form>
    </div>
  );
}

export default App;
