import React from 'react';
import { playersReducer } from './playersReducer';
import { citiesReducer } from './cities';

import { Action, ActionType } from '../../types/actions';
import GameState from '../../types/gameData';
import createInitialGameState from '../helpers/createInitialGameState';

const offToggles: GameState['devToggles'] = {
  changeLocation: false,
  changeColour: false,
  createRoutes: false,
  removeRoutes: false,
};

const advanceCurrentPlayer = (gameState: GameState): GameState => {
  const currentPlayerIdAsNumber = parseInt(gameState.currentPlayerId);
  const numberOfPlayers = Object.keys(gameState.players).length;
  const nextPlayerId = (currentPlayerIdAsNumber + 1) % numberOfPlayers;
  return { ...gameState, currentPlayerId: nextPlayerId.toString() };
};

const miscReducer: React.Reducer<GameState, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.SELECT_PAWN:
      return { ...state, selectedPawnId: action.payload.id };
    case ActionType.SELECT_CITY:
      return { ...state, selectedCityId: action.payload.id };
    case ActionType.DEV_MODE_OFF:
      return {
        ...state,
        selectedCityId: '',
        devMode: false,
        devToggles: offToggles,
      };
    case ActionType.DEV_MODE_ON:
      return { ...state, selectedCityId: '', devMode: true };
    case ActionType.TOGGLE_DEV_FUNCTION:
      return {
        ...state,
        devToggles: { ...offToggles, [action.payload.function]: true },
      };
    case ActionType.NEXT_PLAYER:
      return advanceCurrentPlayer(state);
    case ActionType.LOAD:
      return JSON.parse(localStorage.getItem('game'));
    case ActionType.RESET:
      return createInitialGameState({ loadExisting: false });
    case ActionType.SELECT_COLOUR:
      return { ...state, selectedInfectionColour: action.payload.colour };
    default:
      return { ...state };
  }
};

export const gameStateReducer: React.Reducer<GameState, Action> = (
  state,
  action,
): GameState => {
  const miscState = miscReducer(state, action);
  const newState: GameState = {
    ...miscState,
    cities: citiesReducer(miscState.cities, action),
    players: playersReducer(miscState.players, action),
  };
  localStorage.setItem('game', JSON.stringify(newState));
  return newState;
};
