import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";

const Home = () => {
  const navigate = useNavigate();

  const handleEventClick = (date) => {
    navigate(`/agenda?date=${date}`);
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <aside className="aside">
          <h1 className="logo">agentto</h1>
          <nav>
            <ul className="menu">
              <li onClick={() => navigate("/")}>Início</li>
              <li onClick={() => navigate("/agenda")}>Agenda</li>
              <li onClick={() => navigate("/financeiro")}>Financeiro</li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <section className="month-section">
            <h2>Novembro</h2>
            <div className="box" onClick={() => handleEventClick("2024-11-15")}>
              <p>Evento 1 - 15/11/2024</p>
            </div>
          </section>

          <section className="month-section">
            <h2>Dezembro</h2>
            <div className="box" onClick={() => handleEventClick("2024-12-20")}>
              <p>Evento 2 - 20/12/2024</p>
            </div>
          </section>
        </main>

        <button className="add-button">+</button>
      </div>
    </>
  );
};

export default Home;
