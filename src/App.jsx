import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Portfolio Olivier Kabongo</h1>
        <nav>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="projets">
          <h2>Analyses sur des joueurs de  NBA & de Football</h2>
          <p>Bienvenue dans mon espace d'analyse de données sportives.</p>
          {/* mettre cartes de projets ici plus tard */}
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 - Portfolio Olivier Kabongo - Apprenti Data Analyst</p>
      </footer>
    </div>
  );
}

export default App;