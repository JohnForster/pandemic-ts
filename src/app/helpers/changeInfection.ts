import GameState from '../../types/gameData';
import clone from 'just-clone';
import clamp from 'just-clamp';

export const increment = (cityId: number, gameState: GameState): GameState => {
  const newGameState = clone(gameState);
  const city = newGameState.cities[cityId];
  city.infection = clamp(0, city.infection + 1, 3);
  return newGameState;
};

export const decrement = (cityId: number, gameState: GameState): GameState => {
  const newGameState = clone(gameState);
  const city = newGameState.cities[cityId];
  city.infection = clamp(0, city.infection - 1, 3);
  return newGameState;
};
