'use strict';

console.log('A picar código como locas');

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.log(`'No existe ningún elemento con clase, id o tag llamado' ${selector}`);
  } else {
    return element
  }
}

const titleEl = getEl('.title');
const spanEl = getEl('.span1');
const spanEl2 = getEl('.span5');
const paragEl = getEl();

console.log(titleEl);
console.log(spanEl);
console.log(spanEl2);
console.log(paragEl);

