'use strict'; 

const button = document.querySelector('.js-button');

function getGithubUser() {
  const username = document.querySelector('input').value;
  fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const name = document.querySelector('.js-name');
    name.innerHTML = data.name;

    const img = document.querySelector('.js-avatar');
    img.src = data.avatar_url;

    const repositoriesNumber = document.querySelector('.js-repositories');
    repositoriesNumber.innerHTML = data.public_repos;
  });
}

button.addEventListener('click', getGithubUser);