import '../styles/App.scss';

const App = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
      </form>
    </div>
  );
};

export default App;