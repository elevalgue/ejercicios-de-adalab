'use strict';

console.log('Are you ready for a good time? :))');

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const admittedUsers = users.filter((user) => user.pin % 2 === 0);
console.log(admittedUsers);
