'use strict';

console.log('Are you ready for a good time? :)');

// SELECTORS
const select = document.querySelector('#cities');
const container = document.querySelector('#container');

const newItem = document.createElement('img');

container.appendChild(newItem); 

function displayImage() {
    if (select.value === 'Madrid') {
        newItem.setAttribute('src', '../images/madrid.jpeg');
        
    } else if (select.value === 'Paris') {
        newItem.setAttribute('src', '../images/paris-2020.jpeg');
        
    } else if (select.value === 'NY') {
        newItem.setAttribute('src', '../images/ny.jpeg');
    }
}

// LISTENERS
select.addEventListener('change', displayImage); 
