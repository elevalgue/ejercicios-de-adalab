'use strict';

console.log('Are you ready for a good time? :)');

const paragraphList = document.querySelectorAll('p'); 

for (const paragraphElem of paragraphList) {
    const height = paragraphElem.offsetHeight; 
    paragraphElem.style.height = `${height / 3}px`; 
}
