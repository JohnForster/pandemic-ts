import React, { useState } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import countryData from '../countryData';

import * as Styled from './styled';

import clone from 'just-clone';
import { changeLocation, changeColour } from '../tools/devTools';
import GameState from '../types/gameData';

// ! USE REACT CONTEXT FOR DEV STUFF

function copyStringToClipboard(str: string) {
  // Create new element
  const el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

const initialGameState: GameState = {
  cities: countryData.map(c => ({
    data: {
      ...c,
    },
    infection: c.id % 4,
  })),
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [isDev, setDev] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();

  const changeLocationOn = false;
  const changeColourOn = true;

  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (/* changeLocation === true */ changeLocationOn) {
      if (selectedId || selectedId === 0)
        return setGameState(changeLocation(selectedId, { x, y }, gameState));
    }
  };

  const handleCityClick = (id: number) => {
    if (changeColourOn) return setGameState(changeColour(id, gameState));
  };

  const dev = {
    selectedId,
    setSelectedId,
    handleMapClick,
    handleCityClick,
  };

  const save = () => {
    copyStringToClipboard(
      `module.exports = ${JSON.stringify(
        gameState.cities.map(c => c.data),
        null,
        2,
      )}`,
    );
  };

  const toggleDev = () => {
    setSelectedId(isDev ? undefined : 0);
    setDev(!isDev);
  };

  return (
    <Styled.App>
      <GameBoard gameState={gameState} dev={dev} />
      <button onClick={toggleDev}>Toggle dev mode</button>
      <br />
      Dev mode: {isDev ? 'ON ' : 'OFF'}
      <br />
      Selected: {dev.selectedId ?? 'none'}
      <button onClick={save}>Save</button>
      <br />
    </Styled.App>
  );
};

export default App;
