'use strict';

console.log('A picar código como locas');

// modificamos una variable de ámbito global
let secretLetter = 'x';
function mySecretLetter() {
  secretLetter = 'y';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"