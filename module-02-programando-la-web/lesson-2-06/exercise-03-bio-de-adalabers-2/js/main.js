'use strict';

console.log('Are you ready for a good time? :))');

const adalaber1 = {};
adalaber1.name = 'Elena';
adalaber1.age = 33;
adalaber1.job = 'programadora';
adalaber1.showBio = function () {
    return `Hola soy ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}`
}; 

console.log(adalaber1.showBio());

