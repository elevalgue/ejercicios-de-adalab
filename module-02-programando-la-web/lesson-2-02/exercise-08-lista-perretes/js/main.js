'use strict';

console.log('Are you ready for a good time? :)');

// 1.  Pintar tres elementos dentro de una lista
// 2. Cada uno de ellos contendrá una imagen
// 3. Las imágenes y textos los obtendremos a partir de los siguientes datos:

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.js-list-dog');
listElement.innerHTML = `
<ul>
    <li>
    <img src=${firstDogImage} >
    <p>${firstDogName}</p>
    </li>
    <li>
    <img src=${secondDogImage} >
    <p>${secondDogName}</p>
    </li>
    <li>
    <img src=${thirdDogImage} >
    <p>${thirdDogName}</p>
    </li>
</ul>`;