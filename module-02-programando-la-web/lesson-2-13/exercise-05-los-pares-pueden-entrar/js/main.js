'use strict';

console.log('Are you ready for a good time? :))');

const pins = [2389, 2384, 2837, 5232, 8998];
console.log(pins);

const evenPins = pins.filter(pin => (pin % 2 === 0));
console.log(evenPins);