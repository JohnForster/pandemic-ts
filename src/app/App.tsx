import React, { useState, useReducer } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import { boardData } from '../data/boardData';

import * as Styled from './styled';

import {
  changeLocation,
  changeColour,
  createRoute,
  removeRoute,
} from './tools/devTools';

import { BoardData } from '../types/gameData';
import GameStateContext from './contexts/gameStateContext';
import ClickHandlers from './contexts/clickHandler.context';
import createInitialGameState from './helpers/createInitialGameState';
import { gameStateReducer } from './state/gameStateReducer';
import { ActionType } from '../types/actions';
import CityColour from '../types/enums/cityColour';

const NUMBER_OF_PLAYERS = 12;

// ! USE REACT CONTEXT FOR DEV STUFF
const initialGameState = createInitialGameState({
  numberOfPlayers: NUMBER_OF_PLAYERS,
});

const App: React.FC = () => {
  const [gameState, dispatch] = useReducer(gameStateReducer, initialGameState);

  // TODO incorporate this into gameState?
  const [board, setBoard] = useState<BoardData>(boardData);

  // * *************** These should all be handled with dispatch ****************
  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (gameState.devToggles.changeLocation) {
      if (gameState.selectedCityId)
        return setBoard(
          changeLocation(gameState.selectedCityId, { x, y }, board),
        );
    }
  };

  const handleCityClick = (id: string): void => {
    if (gameState.selectedPawnId) {
      dispatch({
        type: ActionType.MOVE_PLAYER,
        payload: { playerId: gameState.selectedPawnId, cityId: id },
      });
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    }
    if (id === gameState.selectedCityId)
      return dispatch({ type: ActionType.SELECT_CITY, payload: { id: null } });

    if (gameState.devToggles.changeColour)
      return setBoard(changeColour(id, board));

    if (gameState.devToggles.createRoutes && gameState.selectedCityId) {
      setBoard(createRoute(id, gameState.selectedCityId, board));
      return dispatch({ type: ActionType.SELECT_CITY, payload: { id: null } });
    }

    // dispatch({ type: ActionType.SELECT_CITY, payload: { id } });
    // console.log('selectedId:', gameState.selectedCityId);
  };

  const handleRouteClick = (id: string): void => {
    if (gameState.devToggles.removeRoutes)
      return setBoard(removeRoute(id, board));
  };

  const handleSelectedColourChange = (colour: CityColour) =>
    dispatch({ type: ActionType.SELECT_COLOUR, payload: { colour } });

  const clickHandlers = {
    handleMapClick,
    handleCityClick,
    handleRouteClick,
    handleSelectedColourChange,
  };
  // * **************************************************************************

  const logRoutes = (): void => console.log(board.connections);
  const loadGame = (): void => dispatch({ type: ActionType.LOAD });

  return (
    <Styled.App>
      <GameStateContext.Provider value={[gameState, dispatch]}>
        <ClickHandlers.Provider value={clickHandlers}>
          <GameBoard boardData={board} />
        </ClickHandlers.Provider>
      </GameStateContext.Provider>
      <button onClick={loadGame}>Load game</button>
      <button onClick={logRoutes}>Log Routes</button>
    </Styled.App>
  );
};

export default App;
