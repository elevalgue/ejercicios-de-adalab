'use strict';

console.log('Are you ready for a good time? :))');

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];

const premiumUsers = users.filter(user => (user.isPremium === false));
console.log(premiumUsers, 'usuarios premium');

