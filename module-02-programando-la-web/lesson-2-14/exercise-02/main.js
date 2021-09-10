'use strict';

console.log('Are you ready for a good time? :))');

let counter = 0;

const incrementAndShowCounter = () => {
  if (counter < 12) {
    const time = document.querySelector('.time');
    counter++;
    time.innerHTML = counter + '🍇';
  }
}

setInterval(incrementAndShowCounter, 1000);