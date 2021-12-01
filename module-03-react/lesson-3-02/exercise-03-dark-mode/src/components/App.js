import '../styles/App.scss';
import { useState } from 'react'; 

function App() {
  const [changeBackground, setChangeBackground] = useState();

  const renderDarkModeBackground = () => {
    setChangeBackground(!changeBackground)
  }

  return (
    <div className="App light-background">
      <div className={changeBackground ? "dark-background": null}>
        <h1 className="title">Hola mundo</h1>
        <button type="button" onClick={renderDarkModeBackground}>Des / activar el dark mode</button>
        <p>Tienes activado el dark mode</p>
        <p>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!
        </p>
      </div>
    </div>
  );
}

export default App;
