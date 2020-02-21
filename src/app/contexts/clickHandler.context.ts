import React from 'react';

interface ClickHandlersList {
  handleMapClick({ x, y }: { x: number; y: number }): void;
  handleCityClick(id: string): void;
  handleRouteClick(id: string): void;
}

const ClickHandlers = React.createContext<ClickHandlersList>(null);

export default ClickHandlers;
