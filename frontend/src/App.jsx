import React from 'react';
import Header from './header'; // Asegúrate que 'header.jsx' está en la misma carpeta

function App() {
  return (
    <>
      <Header /> {/* Aquí se renderiza tu header */}
      <main style={{ padding: '2rem' }}>
        <h1> Bienvenido a mi Sitio</h1>
      </main>
    </>
  );
}

export default App;