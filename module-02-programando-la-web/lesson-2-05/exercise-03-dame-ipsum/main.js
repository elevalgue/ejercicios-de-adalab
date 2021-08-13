"use strict";

console.log('I/m a stupid entertainer');


// elemento de HTML
let pElement = document.querySelector('.js-lorem'); 

// handler
function handleAddParagraph(evt) {
  console.log('Paso con mi ratón como Pedro por su casa');
  pElement.innerHTML += 'Sweet caramels pastry chocolate cake apple pie. Chocolate cake chocolate pie topping cupcake carrot cake ice cream carrot cake cheesecake. Cake sugar plum jelly-o pie shortbread chocolate cake bear claw liquorice candy. Ice cream gummi bears dessert candy canes candy canes. Apple pie biscuit jelly beans cake biscuit jelly-o. Tiramisu bonbon biscuit marzipan jujubes. Jelly carrot cake croissant jelly sweet cheesecake pastry. Lollipop chocolate bar donut tootsie roll pastry chocolate cake halvah. Halvah marshmallow gummi bears wafer cotton candy. Tootsie roll candy canes danish donut chocolate cake tart tart. Jelly beans ice cream shortbread sesame snaps ice cream. Gummies chocolate cake topping liquorice sugar plum caramels. Fruitcake powder dessert gingerbread cheesecake powder pie tiramisu.'
}

// listener sobre el elemento, con tipo de evento y handler
pElement.addEventListener('mouseover', handleAddParagraph); 