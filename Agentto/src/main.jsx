import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EventProvider } from "./contexts/EventContext/EventContext.jsx";
import Agenda from "./pages/Agenda/index.jsx";
import Financeiro from "./pages/Financeiro/index.jsx";
import Home from "./pages/Home/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
  </StrictMode>
);
