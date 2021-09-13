'use strict';

const input = document.querySelector('.js-input');
const parag = document.querySelector('p');

function renderInputValue() {
    // 1. Almamaceno el valor introducido por el usuario
    const userInputValue = input.value;
    // 2. Lo pinto en el párrafo
    parag.innerHTML = userInputValue;
    // 3. Guardo los datos en el localStorage
    localStorage.setItem( 'name', userInputValue);
    
}

input.addEventListener('keyup', renderInputValue);
