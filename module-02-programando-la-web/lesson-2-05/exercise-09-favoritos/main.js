'use strict';

console.log('Are you ready for agood time? :)');


// 1. Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
const teacherBarlos = document.querySelector('.teacher--tuerto');
const teacherIsra = document.querySelector('.teacher--isra');
const teacherNasi = document.querySelector('.teacher--nasi');


function handleTeacherClick(ev) {
    const selectedTeacher = ev.currentTarget; 
    selectedTeacher.classList.toggle('teacher--selected');

    const elementSelected = selectedTeacher.querySelector('.favorite');
    if (elementSelected.innerHTML = 'Añadir') {
        elementSelected.innerHTML = 'Quitar'; 
    } else {
        elementSelected.innerHTML === 'Añadir'; 
    }
}

teacherBarlos.addEventListener('click', handleTeacherClick)
teacherIsra.addEventListener('click', handleTeacherClick)
teacherNasi.addEventListener('click', handleTeacherClick)
