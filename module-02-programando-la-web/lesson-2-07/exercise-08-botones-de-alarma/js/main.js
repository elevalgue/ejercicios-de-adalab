'use strict';

console.log('Are you ready for a good time? :)');


const buttons = document.querySelectorAll('.js-btn');

function handleButtonsClick(event) {
  event.currentTarget.classList.toggle('danger');
  console.log(event.currentTarget);
}


for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener('click', handleButtonsClick); 
}
