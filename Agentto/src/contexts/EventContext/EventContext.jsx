import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);

  const addEvento = (evento) => {
    const eventoNumerico = {
      ...evento,
      valorSinal: parseFloat(evento.valorSinal) || 0,
      valorAReceber: parseFloat(evento.valorAReceber) || 0,
      valorTotalRecebido: parseFloat(evento.valorTotalRecebido) || 0,
    };
    setEventos((prevEventos) => [...prevEventos, eventoNumerico]);
  };

  return (
    <EventContext.Provider value={{ eventos, addEvento }}>
      {children}
    </EventContext.Provider>
  );
};
