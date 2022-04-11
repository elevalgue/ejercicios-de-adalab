import '../../styles/App.scss';

const App = () => {
  const list = [];

  for (let index = 0; index < 3; index++) {
    list.push(<li> Elemento #0</li>);
  }
  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default App;
