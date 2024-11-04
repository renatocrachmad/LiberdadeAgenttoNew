import React, { useState } from 'react';
import { useEventContext } from '../../contexts/EventContext/EventContext';
import './style.css';

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventData, setEventData] = useState({
    contratante: '',
    local: '',
    cidade: '',
    estado: '',
    horaInicio: '',
    horaTermino: '',
    valorSinal: '',
    valorAReceber: '',
    valorTotalRecebido: '',
    obs: ''
  });
  const { addEvento } = useEventContext();

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEventData({
      contratante: '',
      local: '',
      cidade: '',
      estado: '',
      horaInicio: '',
      horaTermino: '',
      valorSinal: '',
      valorAReceber: '',
      valorTotalRecebido: '',
      obs: ''
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
    alert('Evento agendado com sucesso!');
    closeModal();
  };

  return (
    <div className="agenda-container">
      <h2>Agenda</h2>
      {/* Renderize o calendário semanal */}
      {/* Resto do código para renderizar o modal */}
    </div>
  );
};

export default Agenda;
