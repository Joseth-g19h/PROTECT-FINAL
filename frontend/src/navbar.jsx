import React, { useState } from 'react';
import './navbar.css'; // Asegúrate que sea el nombre correcto

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar-vino">
        <div className="nombre-institucion">
          COMPETITIVIDAD EMPRESARIAL
        </div>
        <ul className="nav-vino-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#transparencia">Transparencia</a></li>
          <li><a href="#agenda">Agenda de Capacitaciones</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#programas">Programas</a></li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          MENÚ
        </button>
      </nav>

      {/* Menú móvil */}
      {menuOpen && <div className="menu-overlay active" onClick={closeMenu}></div>}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#transparencia" onClick={closeMenu}>Transparencia</a></li>
          <li><a href="#agenda" onClick={closeMenu}>Agenda de Capacitaciones</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#programas" onClick={closeMenu}>Programas</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
