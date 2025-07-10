import React from 'react';
import Header from './header';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Bienvenido a MiSitio</h1>
        <p>Este es el contenido de tu página principal.</p>
      </main>
    </div>
  );
}

export default App;
