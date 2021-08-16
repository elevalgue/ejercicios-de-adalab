'use strict';

console.log('Are you ready for a good time? :)');

const button = document.querySelector('.button');

function showMessage() {
  const bookFirst = document.querySelector('#bookFirst').value;
  const bookSecond = document.querySelector('#bookSecond').value;
  const bookList = [bookFirst, bookSecond];
  console.log(bookList);

  console.log('¡A mí también me encantaron ' + bookList + '. Tenemos mucho en común, humana. 🤖');
}

button.addEventListener('click', showMessage);
