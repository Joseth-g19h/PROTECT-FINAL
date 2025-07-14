import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css'; // Asegúrate de importar el CSS

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="hgo-header">
      <div className="hgo-left-section">
        <div className="hgo-logo">
          <img src="/src/img/Logo_gob_hidalgo.svg" alt="Hidalgo.gob.mx" />
        </div>
        <nav className="hgo-nav">
          <div 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('gobierno')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">GOBIERNO</a>
            {activeDropdown === 'gobierno' && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Gobernador</a>
                <a href="#" className="dropdown-item">Depedencias estatalas</a>
                <a href="#" className="dropdown-item">Dependencias federales</a>
                <a href="#" className="dropdown-item">Gabinete</a>
              </div>
            )}
          </div>
          <span className="divider">|</span>
          <div 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('tramites')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">TRÁMITES</a>
            {activeDropdown === 'tramites' && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Trámites ciudadanos</a>
                <a href="#" className="dropdown-item">Trámites empresariales</a>
                <a href="#" className="dropdown-item">Ventanilla única</a>
              </div>
            )}
          </div>
          <span className="divider">|</span>
          <div 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('transparencia')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">TRANSPARENCIA</a>
            {activeDropdown === 'transparencia' && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Portal de transparencia</a>
                <a href="#" className="dropdown-item">Información pública</a>
                <a href="#" className="dropdown-item">Rendición de cuentas</a>
              </div>
            )}
          </div>
          <span className="divider">|</span>
          <div 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('pagos')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">PAGOS</a>
            {activeDropdown === 'pagos' && (
              <div className="dropdown-menu">
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="hgo-icon-button">
        <span className="material-icons">menu</span>
      </div>
    </header>
  );
};

export default Header;