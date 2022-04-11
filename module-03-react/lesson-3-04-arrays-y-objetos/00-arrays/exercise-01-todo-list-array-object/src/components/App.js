import '../styles/App.scss';

const App = () => {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      console.log('hola', task.task, index, task.completed);

      return (
        // <li key={task.index} className='task__name'>
        <li key={task.index} className='task__name'>
          {task.task}
          <span className='task__completed'>
            Completed: {task.completed.toString()}
          </span>
        </li>
      );
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
