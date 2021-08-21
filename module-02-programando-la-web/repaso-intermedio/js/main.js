'use strict';

console.log('Are you ready for agood time? :)');

// SELECTORS
const bodyEl = document.querySelector('#js-body');
const buttonEl = document.querySelector('#js-btn');
const selectEl = document.querySelector('#js-select-face');
const faceEl = document.querySelector('span'); 

const getRandomNumber = () => parseInt(Math.floor(Math.random() * 100));
console.log(getRandomNumber());

function switchBackground() {
    console.log(getRandomNumber());
    if (getRandomNumber() % 2 === 0) {
        console.log('maricamrne');
        bodyEl.classList.remove('sad-face');
        bodyEl.classList.add('happy-face');
    } else {
        bodyEl.classList.remove('happy-face');
        bodyEl.classList.add('sad-face');
        console.log('pepino');

    }
}

function switchFace(ev) {
    const selectValue = selectEl.value;
    faceEl.innerHTML = selectValue; 
}

function handleClick(ev) {
    ev.preventDefault(); 
    switchBackground();
    switchFace(); 
}


// LISTENER
buttonEl.addEventListener('click', handleClick); 
