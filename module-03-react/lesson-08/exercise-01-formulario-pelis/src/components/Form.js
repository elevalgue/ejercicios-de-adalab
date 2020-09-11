import React, { useState } from 'react';
import '../stylesheets/App.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '';
    text: '';
    languaje: '';
  });

  const handleData = (event) => {
    setFormData ()
  }
}


export default Form;
