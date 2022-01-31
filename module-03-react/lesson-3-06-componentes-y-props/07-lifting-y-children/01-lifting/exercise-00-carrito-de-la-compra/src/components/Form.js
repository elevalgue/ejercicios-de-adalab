const Form = props => {
  const handleForm = ev => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  return (
  <form className="form" onSubmit={handleForm}>
			<h2>Rellena tus datos para finalizar la compra:</h2>
			<div className="form">

          {/* name */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="name">
              Escribe un nombre:
            </label>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              placeholder="María García"
              value={props.props.name}
              onChange={props.handleName}
            />
          </div>

          {/* email */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="email">
              Escribe un email:
            </label>
            <input
              className="input-text"
              type="email"
              name="email"
              id="email"
              placeholder="mariagarcia@gmail.com"
              value={props.email}
              onChange={props.handleEmail}
            />
          </div>

          {/* region */}
          <div className="input-group-select">
            <label className="label-text" htmlFor="region">
              Indica tu región:
            </label>
            <select
              className="input-select"
              name="region"
              id="region"
              value={props.region}
              onChange={props.handleRegion}
            >
              <option>España peninsular</option>
              <option>Islas Canarias</option>
              <option>Islas Baleares</option>
              <option>Ceuta</option>
              <option>Melilla</option>
            </select>
          </div>

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="creditCard">
              Tarjeta de crédito
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
              type="radio"
              name="paymentType"
              id="creditCard"
              value="creditCard"
              checked={props.paymentType === 'creditCard'}
              onChange={props.handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cash">
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={props.paymentType === 'cash'}
              onChange={props.handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cashOnDelivery">
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={props.paymentType === 'cashOnDelivery'}
              onChange={props.handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={props.legalTerms}
              onChange={props.handleLegalTerms}
          />
        </div>
	<Preview
				name={props.name}
				email={props.email}
				region={props.region}
				paymentType={props.paymentType}
				legal={props.checkedRadio}
			/>

			{/* reset */}
			{/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
			<Button
				type="submit"
				className="button"
				handleChangeButton={props.handleValid}
				disabled={props.handleValid}
				text="Enviar"
			/>
			{/* send */}

			<Button
				className="button reset"
				handleChangeButton={props.handleResetButton}
				text="Limpiar el formulario"
        />
      </div>
  </form>
	);
};

export default Form;