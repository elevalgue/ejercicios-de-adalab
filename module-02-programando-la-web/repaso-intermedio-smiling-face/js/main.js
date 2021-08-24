'use strict';

console.log('Are you ready for agood time? :)');

// SELECTORS
const bodyEl = document.querySelector('#js-body');
const buttonEl = document.querySelector('#js-btn');
const selectEl = document.querySelector('#js-select-face');
const faceEl = document.querySelector('span'); 

const getRandomNumber = () => parseInt(Math.floor(Math.random() * 100));

function handleClick(ev) {
    ev.preventDefault(); 
    switchBackground();
    switchFace(); 
}

function switchBackground() {
    console.log(getRandomNumber());
    bodyEl.classList.remove('happy-face');
    bodyEl.classList.remove('sad-face');

    if (getRandomNumber() % 2 === 0) {
        bodyEl.classList.add('happy-face');
        // bodyEl.classList.remove('sad-face');
        console.log('maricarmen');
    } else {
        bodyEl.classList.add('sad-face');
        // bodyEl.classList.remove('happy-face');
        console.log('pepino');
    }
}

function switchFace(ev) {
    const selectValue = selectEl.value;
    faceEl.innerHTML = selectValue; 
}

// LISTENER
buttonEl.addEventListener('click', handleClick); 
