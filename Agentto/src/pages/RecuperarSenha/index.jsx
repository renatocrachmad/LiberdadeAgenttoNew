import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const RecuperarSenha = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Redireciona para a página Home
    navigate("/"); // Ajuste o caminho conforme a sua configuração de rotas
  };

  return (
    <div className="recuperarSenha-container">
      <div className="recuperarSenha-box">
        <div className="logo">Agentto</div>
        <h2>Recupere sua senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              <b>Email cadastrado</b>
            </label>
            <input type="text" id="email" name="email" />
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className="links">
          <Link to="/">Já tem conta? Entrar</Link>
        </div>
      </div>
      <p className="disclaimer">
        Ao continuar, você concorda com os <a href="#">Termos de Uso</a> e a{" "}
        <a href="#">Política de Privacidade</a> da agentto e seus parceiros, e
        em receber comunicações.
      </p>
    </div>
  );
};

export default RecuperarSenha;
