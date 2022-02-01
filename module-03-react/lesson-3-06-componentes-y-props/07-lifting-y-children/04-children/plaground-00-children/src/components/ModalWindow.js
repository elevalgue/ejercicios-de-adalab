// Parte del fichero src/components/App.js

// Fichero src/components/ModalWindow.js

const ModalWindow = (props) => {
  console.log(props.children);

  return (
    <section className="modal-window">
      <p>Esto es una ventana modal</p>
      {props.children}
    </section>
  );
};

export default ModalWindow;