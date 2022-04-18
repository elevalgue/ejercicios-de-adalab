'use strict';
console.log('Are you ready for a good time? :))');

// 1. Crear una página HTML con un solo div
// 2. Añadir un h1 con el texto "Lorem ipsum"
const divElement = document.querySelector('.div');
const content = '<div><h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>'
// 3. Añadir imagen con el src http://via.placeholder.com/350x150
// 4. Añadir un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".
divElement.innerHTML = content; 