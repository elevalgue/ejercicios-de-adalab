const InputGroupCheck = (props) => {
	const handleInputChange = (event) => {
		props.handleChange(event.target.ckecked);
	};
	return (
		<div className="input-group-checkbox">
			<label className="label-check" htmlFor={props.checkName}>
				{props.labelText}
			</label>
			{/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
			<input
				type="checkbox"
				name={props.checkName}
				id={props.checkName}
				checked={props.checkChecked}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default InputGroupCheck;