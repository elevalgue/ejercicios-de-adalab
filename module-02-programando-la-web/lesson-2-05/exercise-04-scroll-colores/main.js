"use strict";

console.log('I/m a stupid entertainer');


// elemento de HTML
const divEl = document.querySelector('.js-container');

// handler
function handleChangeBackground() {
  let y = window.scrollY;

  if (y > 200 && y <= 900) {
    divEl.classList.remove('background1');
    divEl.classList.add('background2');
    console.log('maricarmen');
  } else if (y > 900) {
    divEl.classList.remove('background2');
    divEl.classList.add('background3');
    console.log('pepino');
  }
}
// listener sobre el elemento, con tipo de evento y handler
window.addEventListener('scroll', handleChangeBackground);
