'use strict'; 

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages () {
  const promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise()];
  console.log(promises, 'promesas');

  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
        const img = document.querySelector('.dog' + (i + 1));
        img.src = responses[i].message;
      }
    });
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);
