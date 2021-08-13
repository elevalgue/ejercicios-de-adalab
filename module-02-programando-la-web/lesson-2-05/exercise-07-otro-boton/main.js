'use strict';

console.log('Are you ready for agood time? :)');

const buttonEl = document.querySelector('.js-button');

function handleBackgroundColor() {
  buttonEl.classList.toggle('style-button'); 
}

buttonEl.addEventListener('click', handleBackgroundColor); 