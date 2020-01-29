import clone from 'just-clone';
import GameState from '../types/gameData';

const toPercentage = (n: number, decimalPlaces = 1): number => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(n * 100 * multiplier) / multiplier;
};

export const changeLocation = (
  id: number,
  { x, y }: { x: number; y: number },
  gameState: GameState,
): GameState => {
  const cities = clone(gameState.cities);
  const city = cities.find(c => c.data.id === id);
  if (!city) throw new Error(`No city found with id, ${id}`);

  city.data.location = { x: toPercentage(x), y: toPercentage(y) };
  const newGameState = { ...gameState, cities };
  return newGameState;
};

export const changeColour = (id: number, gameState: GameState): GameState => {
  const cities = clone(gameState.cities);
  const city = cities.find(c => c.data.id === id);
  if (!city) throw new Error(`No city found with id, ${id}`);
  city.data.colour = (city.data.colour + 1) % 4;
  const newGameData = { ...gameState, cities };
  return newGameData;
};
