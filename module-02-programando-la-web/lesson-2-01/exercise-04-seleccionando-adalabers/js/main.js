'use strict';
console.log('Are you ready for a good time? :))');

// 1. Crar una página HTML que contenga un listado con tu nombre y el de tu compañer y un título que dida 'La adalaber seleccioanda es:''
// 2. Cambiar el título añadiendo el nombre del primer li
// 3. Cambiar el título añadiendo el nombre del segundo li

const adalaberName = document.querySelector('.li1');
const adalaberName2 = document.querySelector('.li2');
const title = document.querySelector('.title');

title.innerHTML = title.innerHTML + adalaberName.innerHTML;
// title.innerHTML = title.innerHTML + adalaberName2.innerHTML;

