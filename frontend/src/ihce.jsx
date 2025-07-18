// ihce.jsx
import React from 'react';
import './ihce.css';

function IHCE() {
  return (
    <section className="ihce-container">
      <div className="ihce-content">
        {/* Fila superior: SVG + 2 secciones */}
        <div className="ihce-top-row">
          <div className="ihce-icon">
            <img src="/src/img/Gobierno.svg" alt="IHCE Logo" />
            <p className="ihce-text"> Instituto Hidalguense de Competitividad Empresarial</p>
          </div>
          
          <div className="ihce-text-columns">
            <div className="ihce-section ihce-card">
              <h2 className="ihce-title">MISIÓN</h2>
              <p>
                Brindar un apoyo integral a emprendedores y MiPyMes que permita elevar sus niveles de competitividad empresarial y potencializar el desarrollo económico del Estado, mediante esquemas de atención especializada a través del acompañamiento, el diseño, la formación empresarial y financiamiento, de acuerdo al tamaño y requerimientos específicos.
              </p>
            </div>

            <div className="ihce-section ihce-card">
              <h2 className="ihce-title">VISIÓN</h2>
              <p>
                El Instituto Hidalguense de Competitividad Empresarial tiene como visión consolidarse como la entidad estatal capaz de abordar de manera integral y eficaz los requerimientos de las y los emprendedores y MiPyMes, acorde a las necesidades del sector empresarial en el ámbito de la competitividad. Dando respuesta a través del acompañamiento, el diseño, la formación empresarial y financiamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Fila inferior: 2 secciones debajo del SVG */}
        <div className="ihce-bottom-row">
          <div className="ihce-section ihce-card">
            <h2 className="ihce-title">FUNCIONES</h2>
            <p>
              Somos un organismo público descentralizado, que tiene como objetivo generar prosperidad entre la comunidad hidalguense a través de la creación y desarrollo de empresas.
            </p>
          </div>

          <div className="ihce-section ihce-card">
            <h2 className="ihce-title">OBJETIVOS</h2>
            <ol className="ihce-list">
              <li>Promover la competitividad de las micro, pequeñas y medianas empresas de los sectores tradicionales y estratégicos.</li>
              <li>Impulsar el acceso a financiamientos y apoyos económicos para las MiPyMEs y emprendedores.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IHCE;