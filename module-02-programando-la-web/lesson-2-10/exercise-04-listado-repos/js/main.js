'use strict'; 

function getOrgRepos() {
  const org = document.querySelector('input').value;
  
  fetch(`https://api.github.com/orgs/${org}`)
    .then(response => response.json())
    .then(orgData => {
      console.log('Github orgData response: ', orgData);
      const reposURL = orgData.repos_url;
      return fetch(reposURL);
    })

    .then(listReponse => listReponse.json())
    .then(listData => {
      
      const reposUrl = document.querySelector('.js-repositories');
      reposUrl.innerHTML = listData.repos_url;
      let listContent = '';

    for (const repo of listData) {
      const publicRepos = `<li>${repo.name}</li>`;
      listContent += publicRepos;
    }
      
    reposUrl.innerHTML = listContent;
  })
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getOrgRepos);