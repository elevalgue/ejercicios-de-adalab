const Button = props => {
  // const handleAllButton = ev => {
    props.handleChangeButton(); 
    return (
      <button
        // type={props.type}
        className={props.className}
        onClick={props.handleResetButton}
      >
        {props.text}
      </button>
    )
  // }
}

export default Button; 