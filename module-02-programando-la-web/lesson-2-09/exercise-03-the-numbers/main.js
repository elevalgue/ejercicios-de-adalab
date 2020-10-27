'use strict';

// ENUNCIADO

// Vamos a crear una función 'bestLostNomber' que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:
//Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.

//Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.

//Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
//Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

//EJERCICIO

//1. Nos dan esta contante que guarda los números de Lost
const lostNumbers = [4, 8, 15, 16, 23, 42];

//2. Creamos bestLostNumbers
//3. Ejecutamos una función que devuelva los números pares del anterior array
//4. Recorro el array con un bucle al que le aplicaremos %2 para obtener los pares y los meteremos en la variable evenNumbers con el métido push();

function bestLostNumbers() {
  let evenNumbers = [];

  for (let i = 0; i < lostNumbers.length; 1++) {
    //añadimos la propiedad length porque este método devuelve la longitud del array.
    if (lostNumbers[i] % 2 === 0) {
      //estoy diciendo que si los números que conforman el array al ser divididos entre 2 dan 0, estoy recorriendo un número par, así que
      evenNumbers.push(lostNumbers[i]);
    }
  }
  //Ahora crearemos un nuevo array con los números que son múltiplos de 3 que se encuetren la constante inicial. Vamos a repetir la dinámica de la fase anterior del ejercicio.

  let multipleOfThree = [];

  for (let i = 0; i < lostNumbers.length; 1++) {
    if (lostNumbers[i] % 3 === 0) {
      multipleOfThree.push(lostNumbers[i]);
      console.log(result);
    }
  }
}
