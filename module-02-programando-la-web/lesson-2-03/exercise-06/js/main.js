'use strict';

console.log('Let there be rock :)');


//1 . Reescribe el código utilizando un ternario en lugar de un if...else.

let avocados;
const avocadoPrice = 1.5;
const money = 33;

// IF ELSE
if (money >= avocadoPrice) {
    avocados = money / avocadoPrice;
    console.log('Entro por la primera condición?');
} else {
    avocados = 0;
    console.log('o entro por la segunda?');
}
console.log(avocados, 'if else');

// OPERADOR TERNARIO
avocados ? (money / avocadoPrice) : 0;
 console.log(avocados, 'ternario');