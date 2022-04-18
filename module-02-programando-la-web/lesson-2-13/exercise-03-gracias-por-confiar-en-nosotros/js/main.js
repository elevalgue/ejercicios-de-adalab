'use strict';

console.log('Are you ready for a good time? :))');

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];
  
const acknowledgement = users.map(user => {
    if (user.isPremium === false) {
        return `Bienvenida, ${user.name}`
    } else {
        return 'Bienvenida, Yolanda. Gracias por confiar en nosotros'
    }
});

console.log(acknowledgement);