"use strict";

const nameFirst = "María";
const nameSecond = "Elena";
const user = prompt("introduce tu nombre aquí");

if (user === nameFirst) {
  console.log("Bienvenida, María");
} else if (user === nameSecond) {
  console.log("Bienvenida, Elena");
} else {
  console.log("Lo siento, pero el usuario introducido no está registrado");
}
