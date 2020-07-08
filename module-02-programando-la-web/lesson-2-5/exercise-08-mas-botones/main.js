'use strict';

// ENUNCIADO

//Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.
//Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.

// Necesito una constante para el botón, dado que va a aplicarse un cambio de estilos cuando la usuaria pulse sobre él.

// const button = document.querySelector('.button');

// Vamos a escuchar el evento de tipo 'click' con 'add.EventListener' sobre el botón, en este caso.
// button.addEventListener('click', function () {
//   button.classList.toggle('.button');
// });

//En este ejercicio he creado una función anónima dentro del evento. También podría haber crearla fuera y llamarla desde el "eventlistener"

//A continuación vamos a resolver el ejercicio declarando primero una función nominal cuyo nombre es 'handleButton', que tiene a 'event' como parámetro y las instrucciones entre corchetes, que en este caso sería
// { console.log(event);
//selectedFruit.classList.toggle('.button)};

// function
// function handleButtonClick(event) {
//   console.log(event);
//   selectedFruit.classList.toggle('.button');
// }

//Asignamos una constante al nuevo botón, además de reflejar la que ya teníamos.

//Constants

const button = document.querySelector('.button');
const button = document.querySelector('.button-second');

//Vamos a explicar la diferencia entre 'event.target' y 'event.currentTarget'
//event.target:identifica el elemento sobre el que se produce el evento, mientras que
//event.currentTarget se puede utilizar cuando asociamos un mismo 'controlador de eventos' a varios elementos.

//Function

function handleButtonClick(event) {
  event.currentTarget.classList.toggle;
  ('.button');
}
// Y como en el ejercicio anterior creamos el 'handler' solo queda añadir los 'eventlisteners'
button.addEventListener('click', handleButtonClick);
buttonSecond.addEventListener('click', handleButtonClick);
