import '../../styles/App.scss';

const App = () => {
  console.log('hello');

  const months = [
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
    'Enero',
  ];

  const renderMonths = () =>
    months.map((month) => {
      return <li>{month}</li>;
    });

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ul>{renderMonths()}</ul>
    </div>
  );
};

export default App;
