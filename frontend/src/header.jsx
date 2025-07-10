import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">🌟 MiSitio</div>
      <nav className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
