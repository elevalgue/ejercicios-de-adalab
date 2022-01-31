const Button = props => {
  const handleChangeButton = ev => {
    props.handleChangeButton(); 
    return (
      <button
        type={props.type}
        className={props.className}
        onClick={props.disabled}
      >
        {props.text}
      </button>
    )
  }
}

export default Button; 