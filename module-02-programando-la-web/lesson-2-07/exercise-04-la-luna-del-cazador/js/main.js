'use strict';

console.log('Are you ready for a good time? :)');

// cada cuánto: cada 3 años
// útlima vez: 2017
// qué tenemos que calcular: cuándo serán las próximas 15 lunas

let lastMoon = 2017;

for (let index = 0; index < 15; index++) {
    lastMoon += 3
    console.log('Toma nota ✍️. Podrás ver la Luna del Cazador los años indicados a continuación ' + lastMoon);
}