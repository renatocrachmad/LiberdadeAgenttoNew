import React, { useState } from "react";
import { useEventContext } from "../../contexts/EventContext/EventContext";
import "./style.css";
import Header from "../../components/Header";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventData, setEventData] = useState({
    contratante: "",
    local: "",
    cidade: "",
    estado: "",
    horaInicio: "",
    horaTermino: "",
    valorSinal: "",
    valorAReceber: "",
    valorTotalRecebido: "",
    obs: "",
  });
  const { addEvento } = useEventContext();

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEventData({
      contratante: "",
      local: "",
      cidade: "",
      estado: "",
      horaInicio: "",
      horaTermino: "",
      valorSinal: "",
      valorAReceber: "",
      valorTotalRecebido: "",
      obs: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleScheduleEvent = () => {
    const evento = {
      ...eventData,
      valorSinal: parseFloat(eventData.valorSinal) || 0,
      valorAReceber: parseFloat(eventData.valorAReceber) || 0,
      valorTotalRecebido: parseFloat(eventData.valorTotalRecebido) || 0,
    };
    addEvento(evento);
    alert("Evento agendado com sucesso!");
    closeModal();
  };

  return (

    <>
    <Header/>
    
    <div className="agenda-container">
    <aside className="aside">
        <h1 className="logo">Financeiro</h1>
        <nav>
          <ul className="menu">
            <li onClick={() => navigate("/home")}>Início</li> 
            <li onClick={() => navigate("/agenda")}>Agenda</li>
            <li onClick={() => navigate("/financeiro")}>Financeiro</li> 
          </ul>
        </nav>
      </aside>
      <h2>Agenda</h2>

      <button onClick={() => openModal(new Date())}>Novo Evento</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Novo Evento</h3>
            <form>
              <input
                name="contratante"
                placeholder="Contratante"
                value={eventData.contratante}
                onChange={handleChange}
              />
              <input
                name="local"
                placeholder="Local"
                value={eventData.local}
                onChange={handleChange}
              />
              <input
                name="cidade"
                placeholder="Cidade"
                value={eventData.cidade}
                onChange={handleChange}
              />
              <input
                name="estado"
                placeholder="Estado"
                value={eventData.estado}
                onChange={handleChange}
              />
              <input
                name="horaInicio"
                type="time"
                value={eventData.horaInicio}
                onChange={handleChange}
              />
              <input
                name="horaTermino"
                type="time"
                value={eventData.horaTermino}
                onChange={handleChange}
              />
              <input
                name="valorSinal"
                type="number"
                placeholder="Valor do Sinal"
                value={eventData.valorSinal}
                onChange={handleChange}
              />
              <input
                name="valorAReceber"
                type="number"
                placeholder="Valor a Receber"
                value={eventData.valorAReceber}
                onChange={handleChange}
              />
              <input
                name="valorTotalRecebido"
                type="number"
                placeholder="Valor Total Recebido"
                value={eventData.valorTotalRecebido}
                onChange={handleChange}
              />
              <textarea
                name="obs"
                placeholder="Observações"
                value={eventData.obs}
                onChange={handleChange}
              />
              <button type="button" onClick={handleScheduleEvent}>
                Salvar Evento
              </button>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Agenda;
