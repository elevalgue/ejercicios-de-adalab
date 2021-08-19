'use strict';

console.log('Are you ready for a good time? :)');

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'mocatriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  }
]

function countAdalabers(array) {
  return console.log(adalabers.length); 
}

let acc = 0; 
function getAverage(array) {
 for (let index = 0; index < adalabers.length; index++) {
   acc += adalabers[index].age;
   const average = acc / adalabers.length
   console.log(`'La edad media de las adalabers es' ${average}`);
 }
}

function theYoungest() {
  
}

const designers = [];
const newAdalabers = [...adalabers].sort();
console.log(newAdalabers, 'adalabers');

function countDesigners() {
  for (let index = 0; index < newAdalabers.length; index++) {
    if (newAdalabers[index+1] === newAdalabers[index]) {
      designers.push(newAdalabers[index]); 
    }
  }
}

console.log(newAdalabers, 'pepino');

// const numeros  = [1, 2, 2, 3, 4, 4, 5];
// let duplicados = [];
 
// const tempArray = [...numeros].sort();
 
// for (let i = 0; i < tempArray.length; i++) {
//   if (tempArray[i + 1] === tempArray[i]) {
//     duplicados.push(tempArray[i]);
//   }
// }
 
// console.log(duplicados); // [2, 4]

countAdalabers();
getAverage();
theYoungest();
countDesigners();

var valores = [192,10,192,5,192,3];
console.log(Math.min.apply(null, valores));
console.log(Math.max.apply(null, valores));