import React from 'react';
import GameState from '../../types/gameData';

const GameStateContext = React.createContext<GameState>(null);

export default GameStateContext;
