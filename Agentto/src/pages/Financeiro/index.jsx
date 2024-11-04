import React, { useEffect, useState } from "react";
import { useEventContext } from "../../contexts/EventContext/EventContext";
import { useNavigate } from "react-router-dom"; 
import "./style.css";

const Financeiro = () => {
  const { eventos } = useEventContext();
  const navigate = useNavigate(); 
  const [projecaoMensal, setProjecaoMensal] = useState(0);
  const [projecaoAnual, setProjecaoAnual] = useState(0);

  useEffect(() => {
    calcularProjecoes(eventos);
  }, [eventos]);

  const calcularProjecoes = (eventos) => {
    const totalMensal = eventos.reduce(
      (total, evento) => total + parseFloat(evento.valorTotalRecebido || 0),
      0
    );
    const totalAnual = totalMensal * 12;

    setProjecaoMensal(totalMensal);
    setProjecaoAnual(totalAnual);
  };

  return (
    <div className="financeiro-container">
      <header className="header">
        <h1 className="logo">Financeiro</h1>
        <nav>
          <ul className="menu">
            <li onClick={() => navigate("/home")}>Início</li> 
            <li onClick={() => navigate("/agenda")}>Agenda</li>
            <li onClick={() => navigate("/financeiro")}>Financeiro</li> 
          </ul>
        </nav>
      </header>

      <main className="content">
        <h2>Resumo Financeiro</h2>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Valor Sinal</th>
              <th>Valor a Receber</th>
              <th>Valor Total Recebido</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index}>
                <td>R$ {parseFloat(evento.valorSinal || 0).toFixed(2)}</td>
                <td>R$ {parseFloat(evento.valorAReceber || 0).toFixed(2)}</td>
                <td>R$ {parseFloat(evento.valorTotalRecebido || 0).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="projection-section">
          <h3>Projeção de Lucros</h3>
          <p>
            <strong>Mensal:</strong> R$ {projecaoMensal.toFixed(2)}
          </p>
          <p>
            <strong>Anual:</strong> R$ {projecaoAnual.toFixed(2)}
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>V 1.0</p>
      </footer>
    </div>
  );
};

export default Financeiro;
