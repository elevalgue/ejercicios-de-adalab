const Preview = props => {

  return (
    <div >
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>Has aceptado nuestros términos legales: {legalTerms === true ? 'Sí' : 'No'}</li>
      </ul>
    </div >
  );
}; 
