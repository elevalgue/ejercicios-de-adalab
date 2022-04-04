import { useState } from 'react';

const App = () => {
  const [invoice, setInvoice] = useState(false);

  const handleInvoice = ev => {
    setInvoice(ev.target.checked);
  }

  return (
    <div>
      <form >
        <label htmlFor="invoice">Would you like to include the invoice?</label>
        <input type="checkbox" name="invoice" id="invoice" onChange={handleInvoice}/>
        <p>{invoice === true ? 'YES' : 'NO'}</p>
      </form>
    </div>
  )
}

export default App; 