'use strict';

console.log('A picar código como locas');

const titleEl = getEl('.title');
const spanEl = getEl('.span1');
const spanEl2 = getEl('.span5');
const paragEl = getEl();
const paragEl2 = getEl('.parag1');

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.log(`'No existe ningún elemento con clase, id o tag llamado' ${selector}`);
  } else {
    return element
  }
}

function oddOrEven(number) {
  return even % 2 === 0; 
}

oddOrEven(4);
console.log();


paragEl2.innerHTML = parseInt(paragEl2);

console.log(titleEl);
console.log(spanEl);
console.log(spanEl2);
console.log(paragEl);
console.log(paragEl2);

