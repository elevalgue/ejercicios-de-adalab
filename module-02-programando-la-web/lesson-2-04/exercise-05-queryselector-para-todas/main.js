'use strict';

console.log('A picar código como locas');


function getEl(selector) {
  const element = document.querySelector(selector);
  return element
}

const titleEl = getEl('.title');
const spanEl = getEl('.span1');
const spanEl2 = getEl('.span5');

console.log(titleEl);
console.log(spanEl);
console.log(spanEl2);

