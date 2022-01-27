import '../styles/App.scss';


const App = () => {
  const adalabers = [
    {
      name: 'María',
      id: 'a',
    },
  {
      name: 'Sonia',
      id: 'b',
    },
  {
      name: 'Alicia',
      id: 'c',
    },];

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      console.log(adalaber.id)
      return (
        <li key={adalaber.id}>
          {/* Aquí podemos poner todas las etiquetas que queramos */}
          <span className="adalaber__prefix">El nombre de la alumna es:</span>
          <strong className="adalaber__name">{adalaber.name}</strong>
        </li>
      );
    });
  };

  return (
    <div>
      <h1 className="title">Lista de Adalabers</h1>
      <ul>{renderAdalabers()}</ul>
    </div>
  );
};

export default App;