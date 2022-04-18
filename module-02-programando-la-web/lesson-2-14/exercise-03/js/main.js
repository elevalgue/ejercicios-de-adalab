'use strict';

console.log('Are you ready for a good time? :))');

let counter = 0;
let timeUnit = 'segundo'; 

const countTime = () => {
  counter++;
  let notification;
  const text = document.querySelector('.time');
  
  if (counter === 1) {
    notification = `Ha pasado ${counter} ${timeUnit}`;
    
  } else if (counter > 59) {
    timeUnit = 'minuto';
    notification = `Ha pasado ${counter} ${timeUnit}`;
    
  }else if (counter > 1) {
    timeUnit = 'segundos'
    notification = `Han pasado ${counter} ${timeUnit}`;
    
  }
  text.innerHTML = notification; 
}

setInterval(countTime, 1000);