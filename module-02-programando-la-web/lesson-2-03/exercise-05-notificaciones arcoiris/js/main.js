"use strict";

console.log('Are you ready for a good time? :)');

// El método classList es muy útil cuando trabajamos con condicionales
// Con este método "classList.contains()" podremos comprobar si un elemento contine una clase y nos devolverá un booleano (true o false)

// Usando JavaScript, haremos que:
    // 1. Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
    // 2. Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
    // 3. Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'

const containerElement = document.querySelector('.js-container');
const titleElement = document.querySelector('.js-title');
const textElement = document.querySelector('.js-text');


if (containerElement.classList.contains('warning')) {
  titleElement.innerHTML = 'AVISO';
  textElement.innerHTML = 'Tenga cuidado'; 
} else if (containerElement.classList.contains('error')) {
  titleElement.innerHTML = 'ERROR';
  textElement.innerHTML = 'Ha surgido un error'; 
} else if (containerElement.classList.contains('success')) {
  titleElement.innerHTML = 'CORRECTO';
  textElement.innerHTML = 'Los datos son correctos'; 
}