import React from 'react';
import { playersReducer } from './playersReducer';
import { citiesReducer } from './citiesReducer';

import { Action } from '../../types/actions';
import GameState from '../../types/gameData';

export const gameStateReducer: React.Reducer<GameState, Action> = (
  gameState,
  action,
) => {
  return {
    cities: citiesReducer(gameState.cities, action),
    players: playersReducer(gameState.players, action),
    devMode: gameState.devMode, // Needs a reducer
  };
};
