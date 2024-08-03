import React from 'react';
import CityColour from '../../types/enums/cityColour';

interface ClickHandlersList {
  handleMapClick({ x, y }: { x: number; y: number }): void;
  handleCityClick(id: string): void;
  handleRouteClick(id: string): void;
  handleSelectedColourChange(colour: CityColour): void;
}

const ClickHandlers = React.createContext<ClickHandlersList>(null);

export default ClickHandlers;
