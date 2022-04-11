import '../styles/App.scss';

const App = () => {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      console.log(task, index);
      return <li key={index}>{task}</li>;
    });
  };

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
};

export default App;
