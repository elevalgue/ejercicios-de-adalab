'use strict';

console.log('Are you ready for a good time? :)');

// 1. Vamos a duplicar el ejercicio 5 y a modificarlo.
// 2. En este caso en vez de tener nuestra edad en una constante dentro del fichero de JavaScript, debemos crear un párrafo en el fichero HTML.
// 3. Escribir en él nuestra edad.
// 4. Desde JavaScript debemos leer la edad para calcular el número de horas que hemos vivido.

const day = 24;
const year = 365;
const hoursPerYear = year * day;
let age = 33;

const ageElement = document.querySelector('.js-age');
ageElement.innerHTML = 33;

const messageElement = document.querySelector('.js-message');
messageElement.innerHTML = `
<p>Vamos a realizar unos cálculos:</p>
<p>Un año tiene ${day} horas</p>
<p>Un año tiene ${day} horas</p>
<p>si las multiplico por mi edad, ${ageElement.innerHTML}</p>
<p>sale que he vivido un total de ${hoursPerYear * age} horas</p>
`
console.log('Un año tiene', year * day, 'horas', 'así que si las multiplico por mi edad, sale que he vivido un total de', hoursPerYear * age, 'horas');