import React, { useState } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import boardData from '../data/boardData';

import * as Styled from './styled';

import {
  changeLocation,
  changeColour,
  createRoute,
  removeRoute,
} from './tools/devTools';

import { increment, decrement } from './helpers/changeInfection';
import { BoardData } from '../types/gameData';
import GameStateContext from './contexts/gameStateContext';
import copyStringToClipboard from './utils/copyStringToClipboard';
import movePawn from './helpers/movePawn';
import ClickHandlers from './contexts/clickHandler.context';
import createInitialGameState from './helpers/createInitialGameState';

// ! USE REACT CONTEXT FOR DEV STUFF

const initialGameState = createInitialGameState({ numberOfPlayers: 12 });

const App: React.FC = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [board, setBoard] = useState<BoardData>(boardData);
  const [isDev, setDev] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();
  const [selectedPawnId, setSelectedPawnId] = useState<string>();
  const [devToggles, setDevToggles] = useState({
    changeLocation: false,
    changeColour: false,
    createRoutes: false,
    removeRoutes: false,
  });

  // * Handle with events instead?
  // * Create a 'clickHandler' context?
  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (/* changeLocation === true */ devToggles.changeLocation) {
      if (selectedId)
        return setBoard(changeLocation(selectedId, { x, y }, board));
    }
  };

  const handleCityClick = (id: string): void => {
    console.log('selectedId:', selectedId);
    if (id === selectedId) return;
    if (devToggles.changeColour) return setBoard(changeColour(id, board));
    if (devToggles.createRoutes && selectedId) {
      setBoard(createRoute(id, selectedId, board));
      return setSelectedId(null);
    }
    if (selectedPawnId) {
      setGameState(movePawn(selectedPawnId, id, gameState));
      return setSelectedPawnId(null);
    }
    setSelectedId(id);
  };

  const handleRouteClick = (id: string): void => {
    if (devToggles.removeRoutes) return setBoard(removeRoute(id, board));
  };

  const handlePawnClick = (id: string): void => {
    if (selectedPawnId === id) return;
    setSelectedPawnId(id);
  };

  const incrementCity = (id: string): void =>
    setGameState(increment(id, gameState));
  const decrementCity = (id: string): void =>
    setGameState(decrement(id, gameState));

  const clickHandlers = {
    handleMapClick,
    handleCityClick,
    handleRouteClick,
    handlePawnClick,
    incrementCity,
    decrementCity,
  };

  const toggleDev = (): void => {
    setSelectedId(isDev ? undefined : '0');
    setDev(!isDev);
  };

  const oldDev = {
    selectedId,
    setSelectedId,
    isDev,
    toggleDev,
    devToggles,
    setDevToggles,
  };

  const logRoutes = (): void => console.log(board.connections);

  return (
    <Styled.App>
      <GameStateContext.Provider value={gameState}>
        <ClickHandlers.Provider value={clickHandlers}>
          <GameBoard boardData={board} dev={oldDev} />
          {/* {isDev && <DevPanel {...{ gameState, dev, toggleDev, board }} />} */}
        </ClickHandlers.Provider>
      </GameStateContext.Provider>
      <button onClick={logRoutes}>Log Routes</button>
      <button
        onClick={() =>
          copyStringToClipboard(`module.exports = ${JSON.stringify(board)}`)
        }
      >
        Save
      </button>
      <button onClick={toggleDev}>{`Dev mode: ${isDev ? 'ON' : 'OFF'}`}</button>
    </Styled.App>
  );
};

export default App;
