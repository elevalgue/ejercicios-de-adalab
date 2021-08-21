'use strict';

console.log('Are you ready for a good time? :)');

let numbers = [];

function get100Numbers(arr) {
  for (let index = 0; index < 100; index++) {
    numbers.push(index++)
  }
}

get100Numbers(numbers);
console.log(numbers);

function getReversed100Numbers(arr) {
  get100Numbers();
  arr.reverse()
}

getReversed100Numbers(numbers)
console.log(numbers);
