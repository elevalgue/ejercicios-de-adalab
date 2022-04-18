"use strict";

console.log('Are your ready for a good time? :))');

const inputEl = document.querySelector(".js-input");
const textEl = document.querySelector(".js-text");

function insertText (event){
    let addText = event.currentTarget.value;
    textEl.innerHTML = addText;
  console.log(addText, 'estoy recogiendo el valor del input porque he lanzado un evento sobre este elemento');
}

inputEl.addEventListener('keyup', insertText);