// Parte del fichero src/components/App.js

const ModalWindow = (props) => {
  console.log(props.children);

  return (
    <section className="modal-window">
      <p>Esto es una ventana modal</p>
      {props.children}
    </section>
    
    // <section className="modal-window">
    //   <p>Esto es una ventana modal</p>
    //   {props.children}
    // </section>
  );
};

export default ModalWindow;