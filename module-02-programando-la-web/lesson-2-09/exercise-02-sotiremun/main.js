'use strict';

// ENUNCIADO
// Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

//EJERCICIO

let numbers = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
}
get100Numbers();
console.log(numbers);

let numbersReversed = numbers; //obtiene los números del anterior array, por eso esta variable guarda el valor de la anterior.

function getReversed100Numbers() {
  let numbersReversed = numbers.reverse();
}
getReversed100Numbers();
console.log(numbersReversed);
