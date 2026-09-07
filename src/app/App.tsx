import React, { useReducer } from 'react';

import { GameBoard } from './components/gameBoard/gameBoard';

import * as Styled from './styled';

import GameStateContext from './contexts/gameStateContext';
import ClickHandlers from './contexts/clickHandler.context';
import createInitialGameState from './helpers/createInitialGameState';
import { gameStateReducer } from './state/gameStateReducer';
import { ActionType } from '../types/actions';
import CityColour from '../types/enums/cityColour';

const NUMBER_OF_PLAYERS = 12;

const initialGameState = createInitialGameState({
  numberOfPlayers: NUMBER_OF_PLAYERS,
});

const App: React.FC = () => {
  const [gameState, dispatch] = useReducer(gameStateReducer, initialGameState);

  const handleMapClick = ({ x, y }: { x: number; y: number }): void => {
    if (gameState.devToggles.changeLocation && gameState.selectedCityId) {
      dispatch({
        type: ActionType.CHANGE_CITY_LOCATION,
        payload: { id: gameState.selectedCityId, x, y },
      });
    }
  };

  const handleCityClick = (id: string, metaKeyPressed: boolean): void => {
    if (metaKeyPressed) {
      return dispatch({
        type: ActionType.TOGGLE_RESEARCH_STATION,
        payload: { id },
      });
    }

    if (gameState.selectedPawnId) {
      dispatch({
        type: ActionType.MOVE_PLAYER,
        payload: { playerId: gameState.selectedPawnId, cityId: id },
      });
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    }
    if (id === gameState.selectedCityId)
      return dispatch({ type: ActionType.SELECT_CITY, payload: { id: null } });

    if (gameState.devToggles.changeColour) {
      return dispatch({
        type: ActionType.CHANGE_CITY_COLOUR,
        payload: { id },
      });
    }

    if (gameState.devToggles.createRoutes && gameState.selectedCityId) {
      dispatch({
        type: ActionType.CREATE_ROUTE,
        payload: { id1: id, id2: gameState.selectedCityId },
      });
      return dispatch({ type: ActionType.SELECT_CITY, payload: { id: null } });
    }
  };

  const handleRouteClick = (id: string): void => {
    if (gameState.devToggles.removeRoutes) {
      dispatch({ type: ActionType.REMOVE_ROUTE, payload: { id } });
    }
  };

  const handleSelectedColourChange = (colour: CityColour) =>
    dispatch({ type: ActionType.SELECT_COLOUR, payload: { colour } });

  const clickHandlers = {
    handleMapClick,
    handleCityClick,
    handleRouteClick,
    handleSelectedColourChange,
  };

  const logRoutes = (): void => console.log(gameState.board.connections);
  const loadGame = (): void => dispatch({ type: ActionType.LOAD });

  return (
    <Styled.App>
      <GameStateContext.Provider value={[gameState, dispatch]}>
        <ClickHandlers.Provider value={clickHandlers}>
          <GameBoard boardData={gameState.board} />
        </ClickHandlers.Provider>
      </GameStateContext.Provider>
      <button onClick={loadGame}>Load game</button>
      <button onClick={logRoutes}>Log Routes</button>
    </Styled.App>
  );
};

export default App;
