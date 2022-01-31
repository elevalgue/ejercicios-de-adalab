import '../styles/App.scss';
// Fichero src/componets/App.js (código nuevo)

import Logo from './Logo';
import ButtonBlue from './ButtonBlue'; // Aquí importamos el nuevo componente

const App = () => {
  return (
    <div>
      <header>
        <Logo />

        {/* Buscador */}
        <form>
          <input type="search" name="search" placesholder="Buscar" />
        </form>

        <nav>
          <ul>
            <li>
              {/* Botón Iniciar sesión con la prop text */}
              <ButtonBlue text="Iniciar sesión" />
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
          <img src="https://instagram.com/profile-images/adalab.png" title="Adalab" alt="Adalab" />
          <h1>adalab_digital</h1>

          {/* Botón Seguir con la prop text */}
          <ButtonBlue text="Iniciar sesión" />

          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="stories">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>

        <section className="publications">
          {/* Esta es la sección con el logo y la info de Adalab */}
        </section>
      </main>
    </div>
  );
};

export default App;