import React, { useState } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import boardData from '../data/countryData';

import * as Styled from './styled';

import { changeLocation, changeColour } from './tools/devTools';
import GameState, { BoardData } from '../types/gameData';
import DevPanel from './components/devPanel/devPanel';
import GameStateContext from './contexts/gameStateContext';

// ! USE REACT CONTEXT FOR DEV STUFF

const initialGameState: GameState = {
  cities: boardData.cities.map(c => ({
    infection: c.id % 4,
  })),
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [board, setBoard] = useState<BoardData>(boardData);
  const [isDev, setDev] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();

  const changeLocationOn = false;
  const changeColourOn = true;

  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (/* changeLocation === true */ changeLocationOn) {
      if (selectedId || selectedId === 0)
        return setBoard(changeLocation(selectedId, { x, y }, board));
    }
  };

  const handleCityClick = (id: number): void => {
    console.log(`Clicked city ${id}`);
    if (changeColourOn) return setBoard(changeColour(id, board));
    // if (createRoutesOn) return setGame;
  };

  const oldDev = {
    selectedId,
    setSelectedId,
    handleMapClick,
    handleCityClick,
  };

  const dev = { selectedId };

  const toggleDev = (): void => {
    setSelectedId(isDev ? undefined : 0);
    setDev(!isDev);
  };

  return (
    <Styled.App>
      <GameStateContext.Provider value={gameState}>
        <GameBoard boardData={board} dev={oldDev} />
        {isDev && <DevPanel {...{ gameState, dev, toggleDev, board }} />}
      </GameStateContext.Provider>
    </Styled.App>
  );
};

export default App;
