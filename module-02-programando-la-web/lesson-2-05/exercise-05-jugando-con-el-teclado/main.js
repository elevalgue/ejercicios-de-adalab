"use strict";

console.log('Are your ready for a good time? :))');


// elemento de HTML
const body = document.querySelector('body'); 

// handler
function handleChangeColor(event) {
  if (event.key === 'r') {
    body.classList.remove('purple-background')
    body.classList.add('red-background')
  } if (event.key === 'm') {
    body.classList.remove('red-background')
    body.classList.add('purple-background')
  }
}

// listener sobre el elemento, con tipo de evento y handler
document.body.addEventListener('keydown', handleChangeColor); 