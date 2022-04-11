import '../../styles/App.scss';

const App = () => {
  console.log('hello');

  const students = ['María', 'Sandra', 'Bárbara', 'Amanda', 'Marisol', 'Laura'];

  const renderStudents = () => {
    return students.map((student) => {
      return <li>{student.toUpperCase()}</li>;
    });
  };

  return (
    <div>
      <h1>Lista de Alumnas</h1>
      <ul>{renderStudents()}</ul>
    </div>
  );
};

export default App;
