'use strict';

console.log('A picar código como locas');

let secretLetter = 'x';

// function mySecretLetter() {
//   secretLetter = 'y';
//   return secretLetter;
// }

const mySecretLetter = () => {
  secretLetter = 'y';
  return secretLetter;
}

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

const f1 = () => {
  const item = 1;
  return item;
}

console.log(f1()); // devuelve 1;

const average = (7, 8, 15, 8) / 4;
const getAverage = (a, b, c, d) => (a + b + c + d) / 4;
console.log("La nota media de Paco en esta evaluación es", average);

