import React, { Dispatch } from 'react';
import GameState from '../../types/gameData';
import { Action } from '../../types/actions';

const GameStateContext = React.createContext<[GameState, Dispatch<Action>]>(
  null,
);

export default GameStateContext;
