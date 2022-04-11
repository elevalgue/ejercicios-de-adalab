import '../../styles/App.scss';

const App = () => {
  console.log('hello');

  const students = [
    { id: '8341', name: 'María' },
    { id: '2676', name: 'Lucía' },
    { id: '1004', name: 'Sofía' },
  ];

  const renderStudents = () => {
    return students.map((student) => {
      console.log(student);
      return (
        <li key={student.id}>
          <span className='student__prefix'>El nombre de la alumna es: </span>
          <strong className='student__name'>
            {student.name.toUpperCase()}
          </strong>
        </li>
      );
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
