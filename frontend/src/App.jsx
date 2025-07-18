// App.jsx
import React from 'react';
import Header from './header';
import Carousel from './carousel';
import './navbar.css';
import IHCE from './ihce';
import './ihce.css';
import NoticiasCarousel from './noticias'; // Renombrado correctamente
import './noticias.css';                  // Corrección de ruta y nombre

function App() {
  return (
    <div>
      <Header />
      
      {/* Navbar vino debajo del header */}
      <div className="navbar-vino" style={{ marginTop: '60px', marginLeft: '0', marginRight: '0' }}>
        <div className="nombre-institucion">
          INSTITUTO HIDALGUENSE DE COMPETITIVIDAD EMPRESARIAL
        </div>
        <ul className="nav-vino-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Transparencia</a></li>
          <li><a href="#">Agenda de Capacitaciones</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Programas</a></li>
        </ul>
      </div>

      {/* Carrusel principal */}
      <div style={{ marginTop: '0', marginLeft: '0', marginRight: '0' }}>
        <Carousel />
      </div>

      <IHCE />

      {/* Sección de Noticias */}
      <div style={{ marginTop: '0px', marginLeft: '0', marginRight: '0' }}>
        <NoticiasCarousel />
      </div>
    </div>
  );
}

export default App;