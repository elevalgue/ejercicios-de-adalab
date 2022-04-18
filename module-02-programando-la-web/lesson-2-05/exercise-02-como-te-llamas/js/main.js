"use strict";

console.log('I/m a stupid entertainer');


// elemento de HTML
const button = document.querySelector('.js-button');
const inputEl = document.querySelector('.js-name');

// handler
function sayHello(event) {
  console.log(`Hola ${inputEl.value}`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', sayHello); 