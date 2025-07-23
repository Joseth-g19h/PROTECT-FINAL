// App.jsx
import React from 'react';
import Header from './header';
import Carousel from './carousel';
import './navbar.css';
import IHCE from './ihce';
import './ihce.css';
import NoticiasCarousel from './noticias'; // Renombrado correctamente
import './noticias.css';           
import Titular from './tituorganismo'; 
import Ubicacion from './ubicacion';
import Footer from './footer'; 
import './navbar.css';// Importar el Footer
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar /> {/* Asegúrate de importar el Navbar si no lo has hecho ya */}

      {/* Contenido principal */}
      <main className="main-content">
       
          <Carousel />


        <IHCE />

        {/* Sección de Noticias */}
        <div style={{ marginTop: '0px', marginLeft: '0', marginRight: '0' }}>
          <NoticiasCarousel />
        </div>

        {/* Sección de Titular */}
        <div style={{ marginTop: '0px', marginLeft: '0', marginRight: '0' }}>
          <Titular/>
        </div>

        {/* Sección de Ubicación */}
        <div>
          <Ubicacion/>
        </div>
      </main>

      {/* Footer al final */}
      <Footer />
    </div>
  );
}

export default App;