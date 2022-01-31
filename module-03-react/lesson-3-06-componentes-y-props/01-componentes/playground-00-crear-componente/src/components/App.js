import '../styles/App.scss';
import Logo from './Logo';

// Fichero src/componentes/App.js (código original)

const App = () => {
  return (
    <div>
      <header>

        {/* Logo */}
        <Logo />


        {/* Buscador */}
        <form>
          <input type="search" name="search" placesholder="Buscar" />
        </form>

        {/* Botones de login y signup */}
        <nav>
          <ul>
            <li>
              <button className="bg_blue">Iniciar sesión</button>
            </li>
            <li>
              <button className="bg_white">Registrarse</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="profile_info">
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