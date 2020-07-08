'use strict';
// fase 1
// function ten() {
//   for (let i = 0; i < 10; i++) {
//     console.log('patata');
//   }
// }
// ten();

// fase 2
// function ten(word) {
//   for (let i = 0; i < 10; i++) {
//     console.log(word);
//   }
// }
// ten('Patata');
// ten('Aguacate');
// ten('Pizza');

//fase 3
//1. Necesito escribir 'patata' 10 veces, 'aguacate' 7 y 'pizza' 50 veces.
//la diferencia con respecto a la fase anterior es que cada argumento de la función 'ten' se pasa un número distinto de veces.
//2.En este caso tendría una función con dos parámetros, donde el primero sigue siendo 'word' y el segundo representará el número de veces que se pinta ese elemento 'number'.

// function writeThis(word, number) {
//   for (let i = 0; i < number; i++) {
//     console.log(word);
//   }
// }
// writeThis('Patata', 10);
// writeThis('Aguacate', 7);
// writeThis('Pizza', 50);

//fase 4

//1. tengo que ejecutar la función que me genera un número random.
//2.necesito ejecutar la función writeThis que tendrá como segundo parámetro la anterior función para que itere el mismo número de veces que indica la función getRandomNumber

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }

function writeThis(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}
// writeThis('Patata', getRandomNumber(10));
// writeThis('Aguacate', getRandomNumber(10));
// writeThis('Pizza', getRandomNumber(10));

//fase 5
//1. tendría que copiar el array
//2. tengo que crear la función 'writeMyArray'
//3. tengo que generar un bucle con for

// const myWordList = [
//   {
//     text: 'Pencil',
//     total: 6,
//   },
//   {
//     text: 'Thermo',
//     total: 2,
//   },
//   {
//     text: 'TV',
//     total: 8,
//   },
//   {
//     text: 'Phone',
//     total: 4,
//   },
// ];

// function writeMyArray(array) {
//   for (const element of array) {
//     writeThis(element.text, element.total);
//   }
// }

// writeMyArray(myWordList);

// fase 6

//1.Tenemos que repetir el ejercicio anterior, pero en este caso vamos a obtener la información del API de un servidor. https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js

//2.Necesito una función para obtener la información del servidor

let listData = []; //el valor que guardo en esta constante es igual a la información que me llega del servidor.

function getList() {
  fetch('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js') //en esta función solo pasamos como parámetro la URL a donde queremos hacer las petición.
    .then((response) => response.jason()) //jason obtiene y traduce la respuesta del servidor a formato texto y a su vez, devuelve otra promesa.
    .then((data) => {
      listData = data;
      console.log(listData);
    });
}
getList();

function writeMyArray(array) {
  for (const element of array) {
    writeThis(element.text, element.total);
  }
}

writeMyArray(listData);
