import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header className="hgo-header">
      <div className="hgo-left-section">
        <div className="hgo-logo">
          <img src="/src/img/Logo_gob_hidalgo.svg" alt="Hidalgo.gob.mx" />
        </div>
        
        {/* Botón hamburguesa para móvil */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`hgo-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div 
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('gobierno')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#" 
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  handleMobileDropdownToggle('gobierno');
                }
              }}
            >
              GOBIERNO
              {isMobile && (
                <span className={`mobile-arrow ${activeDropdown === 'gobierno' ? 'rotated' : ''}`}>
                  ▼
                </span>
              )}
            </a>
            {(activeDropdown === 'gobierno' || (!isMobile && activeDropdown === 'gobierno')) && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Gobernador</a>
                <a href="#" className="dropdown-item">Dependencias estatales</a>
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
            <a 
              href="#" 
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  handleMobileDropdownToggle('tramites');
                }
              }}
            >
              TRÁMITES
              {isMobile && (
                <span className={`mobile-arrow ${activeDropdown === 'tramites' ? 'rotated' : ''}`}>
                  ▼
                </span>
              )}
            </a>
            {(activeDropdown === 'tramites' || (!isMobile && activeDropdown === 'tramites')) && (
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
            <a 
              href="#" 
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  handleMobileDropdownToggle('transparencia');
                }
              }}
            >
              TRANSPARENCIA
              {isMobile && (
                <span className={`mobile-arrow ${activeDropdown === 'transparencia' ? 'rotated' : ''}`}>
                  ▼
                </span>
              )}
            </a>
            {(activeDropdown === 'transparencia' || (!isMobile && activeDropdown === 'transparencia')) && (
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
            <a 
              href="#" 
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  handleMobileDropdownToggle('pagos');
                }
              }}
            >
              PAGOS
              {isMobile && (
                <span className={`mobile-arrow ${activeDropdown === 'pagos' ? 'rotated' : ''}`}>
                  ▼
                </span>
              )}
            </a>
            {(activeDropdown === 'pagos' || (!isMobile && activeDropdown === 'pagos')) && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Pago de servicios</a>
                <a href="#" className="dropdown-item">Multas y infracciones</a>
              </div>
            )}
          </div>
        </nav>
      </div>
      
      <div className="hgo-icon-button">
        <img src="/src/img/Logo_buzon.svg" alt="Icono" className="hgo-icon-image" />
      </div>
    </header>
  );
};

export default Header;