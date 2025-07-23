import React from 'react'; 
import './Footer.css'; 
import { FaFacebook} from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {   
  return (     
    <footer className="footer">       
      <div className="footer-container">         
        {/* Logo y Aviso de privacidad */}         
        <div className="footer-logo">           
          <div className="logo-container">             
            <div className="logo-img">               
              <img                  
                src="/src/img/logo_gobierno.png"                  
                alt="Hidalgo Primero El Pueblo"                  
                className="footer-logo-image"               
              />             
            </div>
            <div className="privacy-section">
              <p>Aviso de privacidad</p>
            </div>           
          </div>         
        </div>          

        {/* Información de emergencia */}         
        <div className="footer-info">           
          <div className="info-section">             
            <p><strong>Emergencias:</strong></p>             
            <p>Emergencia 911</p>             
            <p>069 Denuncia Anónima</p>           
          </div>         
        </div>          

        {/* Contacto */}         
        <div className="footer-contact">           
          <div className="contact-section">             
            <p><strong>Contacto:</strong></p>             
            <p>Blvd. Felipe Ángeles Núm. 605, Col. Venta Prieta, Pachuca de Soto, Hidalgo, México</p>             
            <p>(771) 715 99 59, (771) 715 99 60, (771) 715 99 61</p>           
          </div>         
        </div>       
      </div>        

      {/* Iconos de redes sociales - línea separada */}       
      <div className="footer-social-icons">         
        <div className="footer-social">    
            <h5>Redes Sociales: </h5>                  
          <a href="https://www.facebook.com/gobhidalgo" aria-label="Facebook" className="social-link">             
            <FaFacebook />           
          </a>           
          <a href="https://x.com/gobiernohidalgo" aria-label="X (Twitter)" className="social-link">
            <FaXTwitter />
          </a>         
        </div>       
      </div>        

      {/* Copyright */}       
      <div className="footer-bottom">         
        <hr className="footer-divider" />         
        <p className="copyright">           
          Copyrights © 2025 Todos los derechos reservados por Hidalgo de la Transformación         
        </p>       
      </div>     
    </footer>   
  ); 
}  

export default Footer;