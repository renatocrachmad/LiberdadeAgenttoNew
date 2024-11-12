import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventProvider } from "./contexts/EventContext/EventContext";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Financeiro from "./pages/Financeiro";
import NovaSenha from "./pages/CriaNovaSenha/index"; // Importando NovaSenha
import RecuperarSenha from "./pages/RecuperarSenha";

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/nova-senha" element={<NovaSenha />} /> {/* Nova rota */}
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
