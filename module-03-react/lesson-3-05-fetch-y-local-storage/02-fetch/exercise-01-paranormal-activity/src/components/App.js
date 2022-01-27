import '../styles/App.scss'
// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  // Estados

  const [shows, setShows] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchShow, setSearchShow] = useState('');

  // useEffect

  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchShow
    callToApi(searchShow).then(response => {
      // Cuando el API responde guardamos los personajes en el estado
      setShows(response);
    });
    // Este useEffect depende de searchShow por eso ponemos [searchShow]
    // Cuando la usuaria cambia el searchShow este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchShow]);

  // Eventos

  const handleSearchShow = ev => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchShow(ev.target.value);
  };

  // Renderizado

  const renderShows = () => {
    // Pintamos el listado de personajes respondido por el API
    return shows.map(
      (show, id) => {
      // El API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
        return <li key={id}>
          <span>
            Serie:  {show.name}
          </span>
          <br />
          
          <span>
            Idioma:  {show.language}
          </span>
          <br />

          <span>
            Estatus:  {show.status}
          </span>
          <br />
        </li>;
        
    });
  };

  return (
    <div>
      <h1>Llamar al API de TvMaze:</h1>

      <form>
        <label htmlFor="name">Busca por el nombre de tu serie favorita: </label>
        <input type="text" name="name" id="name" value={searchShow} onChange={handleSearchShow} />
      </form>

      <h2>Shows con la palabra {searchShow}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;