import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/"); // Redireciona para a página de Login configurada na rota raiz "/"
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">agentto</div>
        <h2>Crie seu cadastro</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Repita sua senha</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
          </div>
          <div className="checkboxContainer">
            <div className="checkbox-group">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">Concordo com os Termos de Uso</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="privacy" name="privacy" />
              <label htmlFor="privacy">
                Concordo com a Política de Privacidade
              </label>
            </div>
          </div>
          <button type="submit">Criar conta</button>
        </form>
        <div className="links">
          <a href="/">Já tem uma conta? Entrar</a>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
