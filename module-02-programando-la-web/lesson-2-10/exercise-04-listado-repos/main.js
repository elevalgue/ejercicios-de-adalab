'use strict';

//El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub, utilizando la API de Github https://api.github.com/orgs/{orgname}

//1. Neesito crear un botón 'buscar' y input de tipo texto.
//2. Recogeré la información cuando el usuario haga click, es decir aplicaré un eventListener sobre el botón.
//3.El botón llamará una función -> getRepos.
//Hará una fetición fetch() a la API de github https://api.github.com/users/{username}, donde 'username' será el input introducido.
//Necesito por tanto, una variable que haga referencia a ese input.
//json

const button = document.querySelector('.js-button');

button.addEventListener('click', getRepos);

function getRepos() {
  const organization = document.querySelector('js-orgs').value;
  //Hacemos la primera petición (fetch() para obtener información sobre la organización
  fetch(`https://api.github.com/orgs/{orgname}${js - orgs}`) // esto nos da una lista de propiedades
    // hacemos el json() al response del servidor
    .then((response) => response.jason())
    //json no devuelve los datos todos los datos sobre la organización y el objetivo es guardar la información relativa a la url de los repositorios de la organización (que se llama "repos_url")
    .then((data) => {
      //creamos constante que guarda la url de los repos
      const reposUrl = organizationData.repos_url;
      // IMPORTANTE, retornamos otro fetch para acceder a la información sobre los repositorios de la organización. Para ello, utilizaremos la constante reposUrl que creamos anteriormente, que alberga la url
    })
    .then((repositoryResponse) => repositoryResponse.json())
    .then((repoData) => {
      //Creamos una lista que contendrá el listado con los nombres de los repos
      const repoList = document.querySelector('ul');
      //Creamos una variable vacía a la que iremos añadiendo todos los li con los nombres de los repo.
      let listContent = '';

      //Creamos un loop en el que, por cada item que haya en el repoData (es decir, todo el listado de repositorios de la organización) vamos a acceder a la propiedad name de cada item, que es el nombre del repositorio.

      for (const repo of repoData) {
        const repoName = `<li>$(repo.name)</li>`; //no olvides pner el li

        //lo añadimos todo al listContent
        listContent += repoName;
      }
      //finalmente, añadimos el listcontent al elemento ul(repoList)
      repoList.innerHTML = listContent;
    });
}
