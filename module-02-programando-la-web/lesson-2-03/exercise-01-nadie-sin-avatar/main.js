"use strict";

console.log('Are you ready for a good time? :)');

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

// 1. Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img
const imageElement = document.querySelector('.user__avatar').src= `${userAvatar}`;

// 2. Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías 
userAvatar = '';

// 3. Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
    // si tenemos el avatar del usuario se muestre este.
    // si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
document.querySelector('.user__avatar').src = `${DEFAULT_AVATAR || userAvatar}`;