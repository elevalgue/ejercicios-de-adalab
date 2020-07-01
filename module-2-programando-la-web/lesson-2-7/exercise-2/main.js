'use strict';

// ENUNCIADO
// Partiendo el ejemplo anterior, crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

//ESTRUCTURA BUCLE

// podemos identificarlo por usar al comienzo la palabra for
// después irá la configuración del bucle entre paréntesis ( ) que tiene 3 partes, separadas por punto y coma ;:
// inicialización será una declaración y asignación de variable (ej: let i = 1, se suele usar i por la palabra index)
// condición será la condición que debe cumplirse para que se ejecute el bloque de código (ej: i < 20)
// actualización será la operación que se realizará al final de cada iteración del bucle (ej: i++, que es la abreviación de i = i + 1)
// al final definimos un bloque de código entre llaves { } que se va a ejecutar si se cumple la condición.

//EJERCICIO

//En este caso necesito para que se pinte "voy por la vuelta 1" necesito asignarle a la variable el valor 1 y la condición para que se cumpla 'i < 11' para que me pinte en pantalla "voy por la vuelta 10"

for (let i = 1; i < 11; i++) {
  console.log('Voy por la vuelta ' + i);
}
