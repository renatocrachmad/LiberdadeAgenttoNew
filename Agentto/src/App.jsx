import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventProvider } from "./contexts/EventContext/EventContext";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Financeiro from "./pages/Financeiro";

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
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
