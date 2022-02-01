// Fichero src/components/Form.js

const Form = props => {

  // Cuando la usuaria cambia el input se ejecuta esta función manejadora del evento
 // Fragmento del fichero src/components/Form.js

  const handleEmail = (ev) => {
    props.updateEmail(ev.target.value); // No subo el evento entero, subo solo el valor del input
  };

  return (
    <form>
      <label>
        Escribe un email:
        <input
          type="email"
          name="name"
          onChange={handleEmail}
        />
      </label>
    </form>
  );
};

export default Form;