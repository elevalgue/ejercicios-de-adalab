'use strict';

// ENUNCIADO

// Vamos a preparar un botón y una clase de CSS.La clase tiene que cambiar alguno de los estilos del botón
// (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente.Cada vez que la usuaria pulse el botón hay
// que: añadir la clase si no la tiene
// quitarla la clase si la tiene

// Necesito una constante para el botón, dado que va a aplicarse un cambio de estilos cuando la usuaria pulse sobre él.

const button = document.querySelector('.button');

// Vamos a escuchar el evento de tipo 'click' con 'add.EventListener' sobre el botón, en este caso.
button.addEventListener('click', function () {
  button.classList.toggle('.button');
});

//En este ejercicio he creado una función anónima dentro del evento. También podría haber crearla fuera y llamarla desde el "eventlistener"

//A continuación vamos a resolver el ejercicio declarando primero una función nominal cuyo nombre es 'handleButton', que tiene a 'event' como parámetro y las instrucciones entre corchetes, que en este caso sería
// { console.log(event);
//selectedFruit.classList.toggle('.button)};

function handleButtonClick(event) {
  console.log(event);
  selectedFruit.classList.toggle('.button');
}
