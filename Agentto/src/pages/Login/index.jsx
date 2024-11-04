import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    // Aqui você pode adicionar a lógica de autenticação se necessário

    // Redireciona para a página Home
    navigate('/home'); // Ajuste o caminho conforme a sua configuração de rotas
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">Agentto</div>
        <h2>Faça seu login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="links">
          <a href="#">crie sua conta</a>
          <a href="#">esqueci minha senha</a>
        </div>
        <p className="disclaimer">
          Ao continuar, você concorda com os <a href="#">Termos de Uso</a> e a <a href="#">Política de Privacidade</a> da agentto e seus parceiros, e em receber comunicações.
        </p>
      </div>
    </div>
  );
};

export default Login;
