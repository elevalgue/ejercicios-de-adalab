'use strict';

console.log('Are you ready for a good time? :))');

const adalaber1 = {};
adalaber1.name = 'Elena';
adalaber1.age = 33;
adalaber1.job = 'programadora';
adalaber1.run = message => `${message} `;
adalaber1.runAMarathon = distance => `${distance}`;

console.log(`Hola!, ${adalaber1.run('Estoy corriendo')}y nada más y nada menos que  ${adalaber1.runAMarathon('42 Km 🥇')}`);


