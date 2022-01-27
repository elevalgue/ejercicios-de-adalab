import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  // Estados

  // const [shipping, setShipping] = useState({});
  // const [shippingCity, setShippingCity] = useState({});

  const [shipping, setShipping] = useState({ address: '', city: '' });

  // Eventos

  const handleAddress = ev => {
    shipping.maricarmen = ev.target.value;
    setShipping( {...shipping} );
  };

  // const handleCity = ev => {
  //   shippingCity.city = ev.target.value;
  //   setShippingCity({ ...shipping });
  // };

  const handleCity = ev => {
    shipping.city = ev.target.value;
    setShipping({ ...shipping });
  };

  return (
    <div>
      <h1>Indica tu dirección para el envío:</h1>

      <form>
        <label htmlFor="maricarmen">Indica tu dirección postal:</label>
        <input type="text" id="maricarmen" value={shipping.maricarmen} onChange={handleAddress} />
        <label htmlFor="city">Indica tu ciudad:</label>
        {/* <input type="text" id="city" value={shippingCity.city} onChange={handleCity} /> */}
        <input type="text" id="city" value={shipping.city} onChange={handleCity} />
      </form>

      <p>
        Te lo vamos a enviar a la dirección <strong>{shipping.maricarmen}</strong> en la ciudad
        {/* <strong> {shippingCity.city}</strong>. */}
        <strong> {shipping.city}</strong>.
      </p>
    </div>
  );
};

export default App;