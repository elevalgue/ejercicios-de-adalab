import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = ev => {
    setName(ev.target.value);
  };

  const handleEmail = ev => {
    setEmail(ev.target.value);
  };

  const handleRegion = ev => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = ev => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = ev => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = ev => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar
  // const renderPaymentTypeText = () => {
  //   if (paymentType === 'creditCard') {
  //     return 'Tarjeta de crédito';
  //   } else if (paymentType === 'cash') {
  //     return 'Efectivo';
  //   } else if (paymentType === 'cashOnDelivery') {
  //     return 'Contra reembolso';
  //   }
  // };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (name !== '' && email !== '' && paymentType !== '' && legalTerms === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
  
  <form>
    
          {/* name */}

              onChange={handleName}
 

          {/* email */}
              onChange={handleEmail}
          

          {/* region */}
              onChange={handleRegion}
          
          {/* payment type */}
  
              onChange={handlePaymentType}
    

    

          {/* legal terms */}
        
              onChange={handleLegalTerms}
      

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input className="button" type="submit" value="Enviar" disabled={isValidForm() === false} />

        {/* send */}
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
    </form>
  );
};

export default App;