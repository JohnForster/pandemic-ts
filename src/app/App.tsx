import React, { useState } from 'react';
import shuffle from 'just-shuffle';

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
import GameState, { BoardData } from '../types/gameData';
import DevPanel from './components/devPanel/devPanel';
import GameStateContext from './contexts/gameStateContext';
import copyStringToClipboard from './utils/copyStringToClipboard';
import movePawn from './helpers/movePawn';
import ClickHandlers from './contexts/clickHandler.context';
// import PawnColour from '../types/enums/pawnColour';

// ! USE REACT CONTEXT FOR DEV STUFF
const colours = shuffle(
  Array(12)
    .fill('')
    .map((x, i) => i),
);

const names = shuffle([
  'John',
  'Jemil',
  'Jamie',
  'Lola',
  'Siobhan',
  'Hakim',
  'Peter',
  'Paddy',
  'Paolo',
  'Rio',
  'Alice',
  'Samir',
]);
const initialGameState: GameState = {
  cities: boardData.cities.map(c => ({
    infection: c.id % 4,
  })),
  players: Array(12)
    .fill('')
    .map((x, i) => ({
      id: i,
      colour: colours.pop(),
      locationId: Math.floor(Math.random() * 96),
      name: names.pop(),
    })),
  devMode: false,
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [board, setBoard] = useState<BoardData>(boardData);
  const [isDev, setDev] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();
  const [selectedPawnId, setSelectedPawnId] = useState<number>();
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
      if (selectedId || selectedId === 0)
        return setBoard(changeLocation(selectedId, { x, y }, board));
    }
  };

  const handleCityClick = (id: number): void => {
    console.log('selectedId:', selectedId);
    if (id === selectedId) return;
    if (devToggles.changeColour) return setBoard(changeColour(id, board));
    if (devToggles.createRoutes && (selectedId || selectedId === 0)) {
      setBoard(createRoute(id, selectedId, board));
      return setSelectedId(null);
    }
    if (selectedPawnId || selectedPawnId === 0) {
      setGameState(movePawn(selectedPawnId, id, gameState));
      return setSelectedPawnId(null);
    }
    setSelectedId(id);
  };

  const handleRouteClick = (id: number): void => {
    if (devToggles.removeRoutes) return setBoard(removeRoute(id, board));
  };

  const handlePawnClick = (id: number): void => {
    if (selectedPawnId === id) return;
    setSelectedPawnId(id);
  };

  const incrementCity = (id: number): void =>
    setGameState(increment(id, gameState));
  const decrementCity = (id: number): void =>
    setGameState(decrement(id, gameState));

  const clickHandlers = {
    handleMapClick,
    handleCityClick,
    handleRouteClick,
    handlePawnClick,
    incrementCity,
    decrementCity,
  };

  const dev = { selectedId };

  const toggleDev = (): void => {
    setSelectedId(isDev ? undefined : 0);
    setDev(!isDev);
  };

  const oldDev = {
    selectedId,
    setSelectedId,
    isDev,
    toggleDev,
    devToggles,
    setDevToggles,

    // handleMapClick,
    // handleCityClick,
    // handleRouteClick,
    // handlePawnClick,
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
