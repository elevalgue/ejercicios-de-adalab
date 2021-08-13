'use strict';

console.log('Are you ready for a good time? :)');

// EJEMPLO
const browserName = 'Mozilla';
console.log('Mozilla is ' + browserName.length + ' code units long');

// 1. Vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres.
// 2. remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.

const message = 'El nombre de mi compañera es';
let mateName = 'Leticia';
let familyName = 'Fernández Sánchez';

let textElement = document.querySelector('.js-message');
textElement.innerHTML = `
<p>${message} 
<span>${mateName} ${familyName}</span>
</p>
<p>y está compuesto por 23 caracteres</p>`;

console.log('y está compuesto por ' + (mateName + familyName).length + ' caracteres');