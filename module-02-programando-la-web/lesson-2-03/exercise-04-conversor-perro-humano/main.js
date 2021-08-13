"use strict";

console.log('Are you ready for a good time? :))');

// Crear un conversor de edad de perror a humanos con las siguientes condiciones:
// 1. El primer año de un perro equivale a 15 años de humano
// 2. El segundo año de un perro equivale a nueve años de humano
// 3. A partir del tercero, cada año de perro equivale a 5 años de humano.

let dogAge = 3;
let humanAge;

if (dogAge === 1) {
  humanAge = 15;
  console.log(`Este perrete 🐶 tiene ${humanAge} años de humano 👩`);
} else if (dogAge === 2) {
  humanAge = 15 + 9;
  console.log(`Este perrete 🐶 tiene ${humanAge} años de humano 👩`);
} else {
  humanAge = 15 + 9 + 5 * (dogAge);
  console.log(`Este perrete 🐶 tiene ${humanAge} años de humano 👩`);
}