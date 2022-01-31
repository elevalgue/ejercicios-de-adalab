const Preview = props => {
  console.log('Estoy renderizando el componente preview');

  return (
    <section>
      <p>Tu nombre es {props.name}</p>
      <p>Tu email es {props.email}</p>
    </section>
  );
}

export default Preview; 