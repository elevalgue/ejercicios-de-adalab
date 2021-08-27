'use strict';

console.log('Are you ready for a good time? :)');

const numbers = [1, 2, 3];

for (let index = 0; index < numbers.length; index++) {
    const list = document.querySelector('.js-list');
    const newLi = document.createElement('li');
    const newContent = document.createTextNode(numbers[index]);
    
    newLi.appendChild(newContent)
    list.appendChild(newLi);
}


console.log(newContent);
console.log(newLi);
console.log(listItems);