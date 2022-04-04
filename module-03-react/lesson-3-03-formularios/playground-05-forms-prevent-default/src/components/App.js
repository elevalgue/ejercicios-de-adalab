import '../styles/App.scss';

const App = () => {
  const handleSubmit = ev => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default App;