import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [payment, setPayment] = useState('');

  const handlePayment = ev => {
    console.log((ev.target.value));
    setPayment(ev.target.value);
  };

  const handleResetPayment = ev => {
    setPayment('');
  };

  return (
    <div>
      <form>
        <label htmlFor="payMethod">Selecciona el método de pago</label>
        <select name="payMethod" id="payMethod" onChange={handlePayment}>
          <option>Tarjeta de Crédito</option>
          <option>Paypal</option>
          <option>Bizum</option>
        </select>
      </form>
      <p>Has seleccioando el siguiente método de pago 👉 {payment}</p>
      <button onClick={handleResetPayment}>Resetea el método de pago</button>
    </div>
  );
};

export default App; 