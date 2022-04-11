import '../../styles/App.scss';

const App = () => {
  const list = [
    <li> Elemento #0</li>,
    <li> Elemento #1</li>,
    <li> Elemento #2</li>,
  ];

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default App;
