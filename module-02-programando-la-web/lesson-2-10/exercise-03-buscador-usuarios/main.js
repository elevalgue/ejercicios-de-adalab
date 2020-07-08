'use strict';

//Vamos a crear un buscador de usuarios de Github. La información que vamos a recoger será 'nombre', 'número de repositorios' y 'avatar'

//1. Neesito crear un botón y input de tipo texto
//2. Recogeré la información cuando el usuario haga click, es decir aplicaré un eventListener sobre el botón.
//3.Para que esto suceda, necesito usar una función getUser.
//Hará una fetición fetch() a la API de github https://api.github.com/users/{username}, donde 'username' será el input introducido.
//Necesito por tanto, una variable que haga referencia a ese input.
//json

const button = document.querySelector('.js-button');

button.addEventListener('click', getUser);

function getUser() {
  const username = document.querySelector('js-username').value;

  fetch(`https://api.github.com/users/${js - username}`)
    .then((response) => response.jason())
    .then((data) => {
      //constantes
      const img = document.querySelector('.js-avatar');
      const name = document.querySelector('js-name');
      const repositoriesNumber = document.querySelector('.js-repositories');

      img.src = data.avatar_url;
      name.innerHTML = data.name;
      repositoriesNumber.innerHTML = data.public_repos;
    });
}
