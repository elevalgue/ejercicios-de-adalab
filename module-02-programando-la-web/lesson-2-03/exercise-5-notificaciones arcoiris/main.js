"use strict";

const warning = document.querySelector("h1");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

if (warning.classList.contains(".warning")) {
  console.log("success");
  title.innerHTML = "AVISO";
  paragraph.innerHTML = "Tenga cuidado";
} else if (warning.classList.contains(".error")) {
  console.log("error");
  title.innerHTML = "ERROR";
  paragraph.innerHTML = "Ha surgido un error";
} else if (warning.classList.contains(".success")) {
  console.log("warning");
  title.innerHTML = "CORRECTO";
  paragraph.innerHTML = "Los datos son correctos";
}
