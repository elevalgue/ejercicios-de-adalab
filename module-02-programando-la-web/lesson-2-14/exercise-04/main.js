'use strict';

console.log('Are you ready for a good time? :))');

let counter = 0;
const youReLate = document.querySelector('.message')

const expireSession = () => {
  counter++;

  if (counter === 5) {
    youReLate.classList.remove('hidden')
  }
}

setInterval(expireSession, 1000);



