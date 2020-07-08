'use strict';

//1. creo una constante para el botón
//2. añadir un eventlistener al botón
//el evente es hacer click (que se ejecute una función), es decir, que tenga lugar una acción.
//3.recoger la información de los libros
//lo hacemos con queryselector
//4.guardar esta información en un array
//5.  Recorrerla con un for..of para mostrar "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana."

const button = document.querySelector('.button');

button.addEventListener('click', showMessage);

//los parámetros están vacíos porque cuando pulsamos el botón no necesitamos recoger ninguna información para ejecutar la función.
function showMessage() {
  console.log('click');
  const bookFirst = document.querySelector('#bookFirst').value;
  const bookSecond = document.querySelector('#bookSecond').value;
  const list = [bookFirst, bookSecond];
  console.log(list);
}

//como este array recoge los valores de constantes los elementos no van entrecomillados.

//cuando quiera recoger información de un input necesito siempre un .value
