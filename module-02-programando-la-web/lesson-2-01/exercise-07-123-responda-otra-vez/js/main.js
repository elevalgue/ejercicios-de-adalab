'use strict';
console.log('Are you ready for a good time? :))');

// 1. Crea una página HTML con una lista ul vacía
// 2. Añadir al contenido de esa lista tres li el primero tendrá como texto 1, el segundo 2 y el tercero 3.

const listElement = document.querySelector('.list')
const content = '<ul><li>1</li><li>2</li><li>3</li></ul>';

listElement.innerHTML = content; 