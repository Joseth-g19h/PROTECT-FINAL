// noticias.jsx - Carrusel Compacto sin Búsqueda
import React, { useState, useEffect, useRef } from 'react';
import './noticias.css';
import { FaNewspaper } from 'react-icons/fa';


const NoticiasCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Día por la Integridad",
      subtitle: "09 de Marzo del 2025",
      image: "/src/img/bd-integridad.jpeg"
    },
    {
      id: 2,
      title: "Día naranja",
      subtitle: "25 de Enero del 2025",
      image: "/src/img/bd-naranja.jpeg"
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="noti-section"> {/* ← CONTENEDOR PADRE CENTRAL */}
      <h2 className="noti-carousel-title">
        <FaNewspaper className="noti-icon" width="15" height="15" style={{verticalAlign: 'middle'}} />
        ÚLTIMAS NOTICIAS</h2>
      <hr className="noti-carousel-divider" />

      <div className="noti-carousel-container">
        <div className="noti-carousel-wrapper">
          <div
            className="noti-carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="noti-carousel-slide">
                <div className="noti-slide-background">
                  <img src={slide.image} alt={slide.title} />
                  <div className="noti-slide-overlay"></div>
                </div>
                <div className="noti-slide-top-bar">
                  <div className="noti-slide-content">
                    <h1 className="noti-slide-title">{slide.title}</h1>
                    <h2 className="noti-slide-subtitle">{slide.subtitle}</h2>
                    <p className="noti-slide-description">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="noti-carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`noti-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasCarousel;