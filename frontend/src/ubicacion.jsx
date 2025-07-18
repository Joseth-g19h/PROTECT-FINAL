import React from 'react';
import './ubicacion.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Ubicacion() {
  return (
    <section className="ubicacion-section">
      <h2 className="ubicacion-titulo">
        <FaMapMarkerAlt className="ubicacion-icono" />
        UBICACIÓN
      </h2>
      <hr className="ubicacion-linea" />
      
      <div className="mapa-contenedor">
        <iframe
          title="Ubicación IHCE"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.225162961472!2d-98.76121928563603!3d20.100197986519242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a7782c842d6f%3A0x9a9a8e3f297fd91b!2sInstituto%20Hidalguense%20de%20Competitividad%20Empresarial!5e0!3m2!1ses-419!2smx!4v1657741746796!5m2!1ses-419!2smx"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="referencia-contenedor">
        <h3 className="referencia-titulo">📍REFERENCIA:</h3>
        <span className="referencia-texto">
          Está a un lado de un establecimiento de comida de mariscos "EL MOCHITECO"
          <a
            href="https://maps.app.goo.gl/z4rxwyyAVAPgxagi6"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-mapa"
          >
            Ver en Google Maps
          </a>
        </span>
      </div>
    </section>
  );
}

export default Ubicacion;