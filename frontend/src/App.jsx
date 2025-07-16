// App.jsx
import React from 'react';
import Header from './header';
import Carousel from './carousel'; // Importar el carrusel
import './navbar.css';

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

      {/* Carrusel debajo del navbar */}
      <div style={{ marginTop: '0', marginLeft: '0', marginRight: '0' }}>
        <Carousel />
      </div>

    </div>
  );
}

export default App;