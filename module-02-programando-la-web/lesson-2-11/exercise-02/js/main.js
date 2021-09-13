'use strict';

// 2. Crear función getCharacter()
function getCharacter() {
    // Guardar valor del input en una constante
    const characterValue = document.querySelector('.js-input-name').value;

     // 2.1. hacer petición a la  API de star wars utilizando el search query y añadiéndole la variable con el input (characterValue) al query de serach
    fetch(`https://swapi.dev/api/people/?search=${characterValue}`)
        .then((searchResponse) => searchResponse.json())
        .then((swapiData) => {
            // 2.2 Pintamos la información referida al nombre del personaje
             // Creamos constante que recoja los datos
            const characters = swapiData.results;

            // Creo referencia a la lista (ul) y creo variable que albergará todo el contenido con todos los li
            const characterList = document.querySelector('ul');
            let characterContent = '';
            
             // Creamos constante para el nombre del personaje y hacemos un loop que vaya a recoger todos los posibles nombres y géneros de los personajes y los pinte en el HTML)
            for (let index = 0; index < characters.length; index++) {
                const characterName = characters[index].name;
                console.log(characterName, 'nombre del pesonaje');
                characterContent += `<li>Name: ${characterName} </li>`;
            }

            console.log(characterContent);

             // Una vez que terminamos el loop y que characterContent tiene toooodos los li con todos los personajes y su información, lo añadimos a la lista
            characterList.innerHTML = characterContent; 

        })
        .catch((error) => console.log(`Ha sucedido un error: ${error}`));
}

// 1. Crear constante que hace referencia al botón y añadirle el eventlistener
const searchButton = document.querySelector('.js-btn'); 
searchButton.addEventListener('click', getCharacter);