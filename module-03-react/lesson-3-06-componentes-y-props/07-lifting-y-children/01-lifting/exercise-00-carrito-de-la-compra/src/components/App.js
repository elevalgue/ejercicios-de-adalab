import { useState } from 'react';
import Form from './Form'
import '../styles/App.scss';


const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = value => {
    setName(value);
  };

  const handleEmail = value => {
    setEmail(value);
  };

  const handleRegion = value => {
    setRegion(value);
  };

  const handlePaymentType = value => {
    setPaymentType(value);
  };

  const handleLegalTerms = checked => {
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const isValidForm = () => {
    if (name !== '' && email !== '' && paymentType !== '' && legalTerms === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Form
          // handleForm={handleForm}
          handleName={handleName}
          handleEmail={handleEmail}
          handleRegion={handleRegion}
          handlePaymentType={handlePaymentType}
          handleResetButton={handleResetButton}
          // handleFormSubmit={handleForm}
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          handleValid={isValidForm() === false}
          checkedRadio={legalTerms}
          handleLegal={handleLegalTerms}
      />
		</div>
	);
};

export default App;