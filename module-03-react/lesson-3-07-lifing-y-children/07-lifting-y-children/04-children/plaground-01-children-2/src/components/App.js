import '../styles/App.scss';
import ModalWindow from './ModalWindow';
import Product from './Product'; 

const App = () => {
  return (
    <div>
      <h1>Jugando con ventanas modales</h1>

      <ModalWindow>
          <h1>Hola</h1>
          <h2>mundo</h2>
          <p>Esto es un <span>ejemplo</span></p>
      </ModalWindow>

      <ModalWindow>
        <h1>Detalle del producto</h1>
        <Product name="Camiseta de React" />
      </ModalWindow> }
    </div>
  );
};

export default App;