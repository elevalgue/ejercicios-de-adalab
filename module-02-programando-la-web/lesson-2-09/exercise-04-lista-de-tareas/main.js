'use strict';

console.log('Are you ready for a good time? :))');

const listEL = document.querySelector('.js-list');

const tasks = [
    {
        name: 'Recoger setas en el campo',
        completed: true
    },
    {
        name: 'Comprar pilas',
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos',
        completed: true
    },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
];

// 1. Primero vamos a pintar una tarea
let index = 0;
const bodyEl = document.querySelector('body');
bodyEl.innerHTML = `<p>Número de tareas a realizar: ${tasks.length}</p>`

// function displayTask(arr) {
//   for (let index = 0; index < tasks.length; index++) {
//       console.log(tasks[0].name, 'maricarmen');
//   }
// }

function scratchFromList(arr) {
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].completed === true) {
            listEL.innerHTML += `<li>${tasks[index].name.toUpperCase()}</li>`;
            listEL.innerHTML += `<checkbox:'checked'>`;
            listEL.innerHTML += `<span>${tasks[index].completed}</span>`;
            listEL.innerHTML += `<p>-------------------------------------------------------</p>`;

            
            // console.log('Completada: ' + tasks[index].completed);
            // console.log('-----------------------------------------------------------------------');
        }
    }
    
}

// displayTask(tasks);
scratchFromList(tasks); 