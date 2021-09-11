'use strict';

// Fetch with anonymous function
// function getRandomInteger() {
//   fetch('https://api.rand.fun/number/integer')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     document.querySelector('.js-result').innerHTML = data.result;
//   });
// }

// document.querySelector('.js-number').addEventListener("click", getRandomInteger);



// Fetch with arrow function
function getRandomInteger() {
  fetch("https://api.rand.fun/number/integer")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}

document.querySelector('.js-number').addEventListener("click", getRandomInteger);