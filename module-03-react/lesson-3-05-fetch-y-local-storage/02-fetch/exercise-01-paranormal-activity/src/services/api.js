const callToApi = (searchShow) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchShow}`)
    .then(response => response.json())
    .then(response => {

    const result = response.map(item => {
        return {
          id: item.show.id,
          name: item.show.name,
          language: item.show.language,
          status: item.show.status,
        };
      });

      return result;
    });
};

export default callToApi;