'use strict';

function geltEl(selector) {
  const element = document.querySelector(selector);

  //return element;
  console.log(element);

  //false
  if (!element) {
    console.error(
      (`"No existe ningún elemento con clase, id o tag llamado" ${selector}`)
  }
  return result;
}
