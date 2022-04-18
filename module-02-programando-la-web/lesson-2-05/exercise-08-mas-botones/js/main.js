'use strict';

console.log('Are you ready for agood time? :)');

const buttonEl1 = document.querySelector('.btn-first');
const buttonEl2 = document.querySelector('.btn-second');

function handleBackgroundColor(event) {
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle('btn--selected'); 
}

buttonEl1.addEventListener('click', handleBackgroundColor);
buttonEl2.addEventListener('click', handleBackgroundColor);