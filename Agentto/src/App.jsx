import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
