import React from 'react';

interface ClickHandlersList {
  handleMapClick({ x, y }: { x: number; y: number }): void;
  handleCityClick(id: number): void;
  handleRouteClick(id: number): void;
  handlePawnClick(id: number): void;
  incrementCity(id: number): void;
  decrementCity(id: number): void;
}

const ClickHandlers = React.createContext<ClickHandlersList>(null);

export default ClickHandlers;
