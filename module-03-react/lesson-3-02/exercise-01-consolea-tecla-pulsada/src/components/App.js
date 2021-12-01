import '../styles/App.scss';

const App = () => {
  const handleInput = (e) => {
    console.log(e.target.value, 'tecleo');
  }

  return (
  <div className="App">
      <h1 className="title">Hola mundo</h1>
      <form>
        <label>Esto es un input</label>
        <input onKeyUp={handleInput} type="text"></input>
      </form>
    </div>
  );
}

export default App;
