import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NovaSenha = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    // Aqui você pode adicionar a lógica de autenticação se necessário

    // Redireciona para a página Home
    navigate("/home"); // Ajuste o caminho conforme a sua configuração de rotas
  };

  return (
    <div className="novaSenha-container">
      <div className="novaSenha-box">
        <div className="logo">Agentto</div>
        <h2>Crie sua nova senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nova senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="repetirPassword">Repita sua nova senha</label>
            <input
              type="repetirPassword"
              id="repetirPassword"
              name="repetirPassword"
            />
          </div>
        </form>
        <button type="submit">Redefinir senha</button>
      </div>
      <p className="disclaimer">
        Ao continuar, você concorda com os <a href="#">Termos de Uso</a> e a{" "}
        <a href="#">Política de Privacidade</a> da agentto e seus parceiros, e
        em receber comunicações.
      </p>
    </div>
  );
};

export default NovaSenha;
