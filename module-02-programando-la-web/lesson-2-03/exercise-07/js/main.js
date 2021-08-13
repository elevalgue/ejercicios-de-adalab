'use strict';

console.log('Let there be rock :)');

// Hacer un pequeño programa que te sugiera una receta en función del ingrediente que le pasemos.

// 1. Para resolverlo nos dan una variable en la que podemos declarar un ingrediente a elegir entre estos tres: pollo, merluza o espinacas por defecto 

    // let ingredient = 'Pollo';


// 2. Si no hay ingrediente pondrá 'Nada en la nevera' 

    // default ;
    // console.log('Nada en la nevera');

// 3.  Según el ingrediente que le pasemos el programa nos devolverá un mensaje por consola diciéndote el ingrediente que has elegido y con las siguientes sugerencias de receta: Filete con patatas / Merluzita en salsa verde / Espinacas rehogadas. 

    // case 'Merluza':
    // console.log('Merluzita en salsa verde');

let ingredient = 'Espinacas';

switch (ingredient) {
    case 'Pollo':
        console.log('Sugerencias de receta: Pollo con patatas');
        break;
    case 'Merluza':
        console.log('Sugerencias de receta: Merluza en salsa verde');
        break;
    case 'Espinacas':
        console.log('Sugerencias de receta: Espinacas con garbanzos');
        break;
    default:
        console.log('Nada en la nevera');
}
