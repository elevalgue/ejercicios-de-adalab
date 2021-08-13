'use strict';

console.log('Are you ready for agood time? :)');

const buttonEl = document.querySelector('.js-btn');
const listEl = document.querySelector('.js-list'); 

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function handleRenderFilms() {
    listEl.innerHTML =
        `<li>${inception}</li>  
        <li>${theButterFlyEffect}</li>  
        <li>${eternalSunshineOfTheSM}</li>  
        <li>${blueVelvet}</li>  
        <li>${split}</li>`
}

buttonEl.addEventListener('click', handleRenderFilms); 