'use strict';

console.log('Are you ready for a good time? :))');

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenLostNumbers = []; 
const multipleOfThree = []; 

let index = 0;

function bestLostNumbers(arr) {
    for (let index = 0; index < lostNumbers.length; index++) {
        if (lostNumbers[index] % 2 === 0) {
            evenLostNumbers.push(lostNumbers[index]); 
        }
    }
}

bestLostNumbers(); 
console.log(evenLostNumbers, 'maricarmen');


function best3Numbers(arr) {
    for (let index = 0; index < lostNumbers.length; index++) {
        if (lostNumbers[index] % 3 === 0) {
            multipleOfThree.push(lostNumbers[index]); 
        }
    }
}

best3Numbers(); 
console.log(multipleOfThree, 'pepino');