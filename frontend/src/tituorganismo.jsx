import React from 'react';
import './tituorganismo.css';
import titularImg from '/src/img/Titular.jpeg';
import { FaUserTie } from 'react-icons/fa'; // Ícono profesional

const Titular = () => {
  return (
    <div className="titular-section">
      <h2 className="titular-heading">
        <FaUserTie className="titular-icono" />
        TITULAR DEL ORGANISMO
      </h2>
      <hr className="titular-divider" />

      <div className="titular-container">
        <div className="titular-image">
          <img src={titularImg} alt="Titular del Organismo" />
        </div>
        <div className="titular-text">
          <h3>L.D. Carlos Martín Pérez Quijano</h3>
          <h4>Funciones del Director General</h4>
          <p>
            Aplicar las herramientas que ofrezcan el acompañamiento empresarial a través de la generación de servicios, 
            agendas de formación de capital humano, asistencia técnica especializada, vinculación efectiva con diversos 
            organismos empresariales, académicos y gubernamentales, etc., que inviten la mortandad de las empresas y emprendedores.
          </p>
          <button className="agenda-btn">Conoce la agenda del Director General</button>
        </div>
      </div>
    </div>
  );
};

export default Titular;
