'use strict';

console.log('Are you ready for agood time? :)');

const links = document.querySelectorAll('.js-link');

function StopAnchor(ev) {
    ev.preventDefault(links)
    for (let index = 0; index < links.length; index++) {
    }
}

links.addEventListener('click', StopAnchor); 
