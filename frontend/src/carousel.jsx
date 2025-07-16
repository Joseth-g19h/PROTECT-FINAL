// Carousel.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const intervalRef = useRef(null);
  
  // Datos del carrusel - puedes modificar este contenido
  const slides = [
    {
      id: 1,
      title: "Capacitación Empresarial",
      subtitle: "Fortalecemos tu negocio",
      description: "Descubre nuestros programas de capacitación diseñados para impulsar la competitividad de tu empresa.",
      image: "/src/img/PORT5.jpeg"
    },
    {
      id: 2,
      title: "Servicios Especializados",
      subtitle: "Soluciones a tu medida",
      description: "Ofrecemos servicios especializados para el desarrollo y crecimiento de las empresas hidalgüenses.",
      image: "/src/img/port4.jpeg"
    },
    {
      id: 3,
      title: "Agenda de Eventos",
      subtitle: "Mantente informado",
      description: "Consulta nuestra agenda de capacitaciones, talleres y eventos para empresarios.",
      image: "/src/img/PORTE1.jpeg"
    },
    {
      id: 4,
      title: "Programas de Apoyo",
      subtitle: "Impulsamos tu crecimiento",
      description: "Conoce nuestros programas de apoyo para el fortalecimiento empresarial en Hidalgo.",
      image: "/src/img/PORT2.jpeg"
    }
  ];

  const totalSlides = slides.length;

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Función para pausar el auto-play (para uso en eventos)
  const pauseAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Función para iniciar el auto-play (para uso en eventos)
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) return; // Si ya hay un intervalo, no crear otro
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  }, [totalSlides]);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isSearchActive) {
      startAutoPlay();
    } else {
      pauseAutoPlay();
    }
    
    // Cleanup al desmontar el componente
    return () => {
      pauseAutoPlay();
    };
  }, [isSearchActive, startAutoPlay, pauseAutoPlay]);

  // Manejar cuando el usuario enfoca el input de búsqueda
  const handleSearchFocus = () => {
    setIsSearchActive(true);
    pauseAutoPlay();
  };

  // Manejar cuando el usuario sale del input de búsqueda
  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };

  // Manejar cambios en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Manejar el submit de la búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Aquí puedes agregar la lógica para procesar la búsqueda
      console.log('Buscando:', searchValue);
      // Por ejemplo, redirigir a una página de resultados
      // window.location.href = `/buscar?q=${encodeURIComponent(searchValue)}`;
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <div className="slide-background">
                <img src={slide.image} alt={slide.title} />
                <div className="slide-overlay"></div>
              </div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <p className="slide-description">{slide.description}</p>
                <form onSubmit={handleSearchSubmit} className="search-container">
                  <button 
                    type="submit" 
                    className="search-button"
                    disabled={!searchValue.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                  <input 
                    type="text" 
                    placeholder="¿Con qué trámite te podemos ayudar?" 
                    className="search-input"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                  />
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;