import React from 'react';
import { playersReducer } from './playersReducer';
import { citiesReducer } from './cities';

import { Action, ActionType } from '../../types/actions';
import GameState from '../../types/gameData';

const offToggles: GameState['devToggles'] = {
  changeLocation: false,
  changeColour: false,
  createRoutes: false,
  removeRoutes: false,
};

const miscReducer: React.Reducer<GameState, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.SELECT_PAWN:
      return { ...state, selectedPawnId: action.payload.id };
    case ActionType.SELECT_CITY:
      return { ...state, selectedCityId: action.payload.id };
    case ActionType.TOGGLE_DEV:
      return { ...state, selectedCityId: '', devMode: !state.devMode };
    case ActionType.TOGGLE_DEV_FUNCTION:
      return {
        ...state,
        devToggles: { ...offToggles, [action.payload.function]: true },
      };
    default:
      return { ...state };
  }
};

export const gameStateReducer: React.Reducer<GameState, Action> = (
  state,
  action,
) => {
  const newState = miscReducer(state, action);
  return {
    ...newState,
    cities: citiesReducer(newState.cities, action),
    players: playersReducer(newState.players, action),
  };
};
