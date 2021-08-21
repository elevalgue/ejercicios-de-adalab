'use strict';
console.log('Are you ready for a good time? :))');

let numbers = [];

function get100Numbers(arr) {
  for (let index = 0; index < 100; index++) {
    arr.push(index++)
  }
}

get100Numbers(numbers);
console.log(numbers);

