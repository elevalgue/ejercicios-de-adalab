"use strict";

console.log('I/m a stupid entertainer');

// elemento de HTML
const button = document.querySelector('.js-button');
const text = document.querySelector('.js-text');


// handler
function changeText(evt) {
  text.innerHTML = 'Mi primer click, 🖱️ ¡ole yo y la mujer que me parió! 💃'
}


// listener sobre el elemento, con tipo de 
button.addEventListener('click', changeText); 