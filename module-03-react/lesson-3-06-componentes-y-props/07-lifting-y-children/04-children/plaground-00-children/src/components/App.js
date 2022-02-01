import '../styles/App.scss';
import ModalWindow from './ModalWindow';

const App = () => {
  return (
    <div>
      <h1>Jugando con ventanas modales</h1>

      <ModalWindow>
        <h1>Contenido de una ventana modal</h1>
        {/* React ha sustituido {props.children} por este h1*/}
      </ModalWindow>

      <ModalWindow>
        <h2>Contenido de la segunda ventana modal</h2>
        {/* React ha sustituido {props.children} por este h2*/}
        <h3>Hola mundo</h3>
      </ModalWindow>
    </div>
  );
};

export default App;