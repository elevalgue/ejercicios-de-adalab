'use strict';

// ENUNCIADO
// Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

//EJERCICIO

//1.Creamos la función 'get100Numbers' que devuelve un array con los números del 1 al 100.

let numbers = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
}
get100Numbers();
console.log(numbers);
