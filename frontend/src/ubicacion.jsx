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
          src="https://maps.google.com/maps?q=Instituto+Hidalguense+de+Competitividad+Empresarial,+Pachuca+de+Soto,+Hidalgo&hl=es-419&z=15&output=embed"
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