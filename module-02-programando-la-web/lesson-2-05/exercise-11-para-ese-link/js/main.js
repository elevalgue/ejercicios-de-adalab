'use strict';

console.log('Are you ready for agood time? :)');


const menu = document.querySelector('.js-menu');

function handleClick(ev) {
    ev.preventDefault()
}

menu.addEventListener('click', handleClick)