'use strict';

console.log('Are you ready for a good time? :))');

let tree = '';

function displayTree(height) {
  for (let index = 0; index < height; index++) {
    tree += '▲'; 
    console.log(tree);
  }
}

displayTree(5);