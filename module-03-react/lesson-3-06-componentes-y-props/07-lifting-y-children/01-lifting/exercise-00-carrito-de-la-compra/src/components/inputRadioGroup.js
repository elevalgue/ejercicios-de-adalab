const InputGroupRadio = (props) => {
	const handleInputChange = (event) => {
		props.handleChange(event.target.value);
	};
	return (
		<div className="input-group-radio">
			<label className="label-radio" htmlFor={props.inputId}>
				{props.labelText}
			</label>
			{/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
			<input
				type="radio"
				name={props.name}
				id={props.inputId}
				value={props.inputValue}
				checked={props.checked}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default InputGroupRadio;