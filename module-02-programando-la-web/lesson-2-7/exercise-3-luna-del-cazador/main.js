'use strict';

// ENUNCIADO
//Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

//EJERCICIO

//Crearé una lista con los próximos años en los que acontecerá la 'Luna del Cazador' y almacenaremos el array en una constante.

const HuntersMoon = [
  2017,
  2020,
  2023,
  2026,
  2029,
  2032,
  2035,
  2038,
  2041,
  2044,
  2047,
  2050,
  2053,
  2056,
  2059,
  2062,
];

console.log(HuntersMoon.length);

// He incluído en la lista el año de la última 'Luna del Cazador', por ello el console.log me pinta 16 elementos.

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < huntersMoon.length; i++) {
  acc += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log('La próxima luna es ' + acc);
