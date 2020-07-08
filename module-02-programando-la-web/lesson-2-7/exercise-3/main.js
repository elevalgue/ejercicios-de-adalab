'use strict';

// ENUNCIADO
//Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.

//NOTA: Este tipo de variables como acc que se va actualizando y al final tiene el resultado de varias operaciones se llama acumulador. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga.

//ESTRUCTURA BUCLE

// podemos identificarlo por usar al comienzo la palabra for
// después irá la configuración del bucle entre paréntesis ( ) que tiene 3 partes, separadas por punto y coma ;:
// inicialización será una declaración y asignación de variable (ej: let i = 1, se suele usar i por la palabra index)
// condición será la condición que debe cumplirse para que se ejecute el bloque de código (ej: i < 20)
// actualización será la operación que se realizará al final de cada iteración del bucle (ej: i++, que es la abreviación de i = i + 1)
// al final definimos un bloque de código entre llaves { } que se va a ejecutar si se cumple la condición.

//EJERCICIO

// En el enunciado me indican que el valor de la variable 'acc' es 0
let acc = 0;
// A continuación voy a contruir un bucle que se ejecute 10 veces y que sume 2 a la variable ya creada cada vez que itere
for (let i = 0; i < 10; i++) {
  acc = acc + 2;
}

// Pinto en la consola
console.log('El resultado es ' + acc);
// Lo que pinta la consola es:El resultado es 20
