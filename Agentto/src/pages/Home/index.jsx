import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">agentto</h1>
        <nav>
          <ul className="menu">
            <li>Início</li>
            <li>Agenda</li>
            <li>Financeiro</li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <section className="month-section">
          <h2>Novembro</h2>
          <div className="box"></div>
        </section>
        <section className="month-section">
          <h2>Dezembro</h2>
          <div className="box"></div>
        </section>
      </main>
      <button className="add-button">+</button>
      <footer className="footer">
        <p>V 1.0</p>
      </footer>
    </div>
  );
};

export default Home;
