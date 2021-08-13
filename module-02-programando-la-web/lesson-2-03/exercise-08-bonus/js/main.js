'use strict';

console.log('Let there be rock :)');

// Calcular cuál va a ser el siguiente año bisiesto

let currentYear = 2021;
const leapYear = 4;

// Qué hay que hacer en cristino

console.log(currentYear % leapYear);
// 1. Dividir el año actual entre 4, es decir, la frecuencia con la que hay año visiesto

// 2. Esto indica los años que han pasado desde el último año bisiesto

// 3. Sumarle la diferencia para indicar cuál es el próximo año bisiesto