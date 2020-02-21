import React, { useState, useReducer } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import boardData from '../data/boardData';

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

// ! USE REACT CONTEXT FOR DEV STUFF
const initialGameState = createInitialGameState({ numberOfPlayers: 12 });

const App: React.FC = () => {
  const [gameState, dispatch] = useReducer(gameStateReducer, initialGameState);

  // TODO incorporate this into gameState?
  const [board, setBoard] = useState<BoardData>(boardData);

  // const [gameState.devToggles, setDevToggles] = useState({
  //   changeLocation: false,
  //   changeColour: false,
  //   createRoutes: false,
  //   removeRoutes: false,
  // });

  // * *************** These should all be handled with dispatch ****************
  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (/* changeLocation === true */ gameState.devToggles.changeLocation) {
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
    if (id === gameState.selectedCityId) return;
    if (gameState.devToggles.changeColour)
      return setBoard(changeColour(id, board));
    if (gameState.devToggles.createRoutes && gameState.selectedCityId) {
      setBoard(createRoute(id, gameState.selectedCityId, board));
      return dispatch({ type: ActionType.SELECT_CITY, payload: { id } });
    }

    dispatch({ type: ActionType.SELECT_CITY, payload: { id } });
    console.log('selectedId:', gameState.selectedCityId);
  };

  const handleRouteClick = (id: string): void => {
    if (gameState.devToggles.removeRoutes)
      return setBoard(removeRoute(id, board));
  };

  const clickHandlers = {
    handleMapClick,
    handleCityClick,
    handleRouteClick,
  };
  // * **************************************************************************

  const logRoutes = (): void => console.log(board.connections);

  return (
    <Styled.App>
      <GameStateContext.Provider value={[gameState, dispatch]}>
        <ClickHandlers.Provider value={clickHandlers}>
          <GameBoard boardData={board} />
          {/* {isDev && <DevPanel {...{ gameState, dev, toggleDev, board }} />} */}
        </ClickHandlers.Provider>
      </GameStateContext.Provider>
      <button onClick={logRoutes}>Log Routes</button>
    </Styled.App>
  );
};

export default App;
