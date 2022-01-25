import '../styles/App.scss';

const App = () => {
  const handleInput = (e) => {
    console.log('tecleo la letra...' ,e.key);
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
