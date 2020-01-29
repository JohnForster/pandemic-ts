import clone from 'just-clone';
import { BoardData } from '../../types/gameData';

const toPercentage = (n: number, decimalPlaces = 1): number => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(n * 100 * multiplier) / multiplier;
};

export const changeLocation = (
  id: number,
  { x, y }: { x: number; y: number },
  boardData: BoardData,
): BoardData => {
  const cities = clone(boardData.cities);
  const city = cities.find(c => c.id === id);
  if (!city) throw new Error(`No city found with id, ${id}`);

  city.location = { x: toPercentage(x), y: toPercentage(y) };
  const newGameState = { ...boardData, cities };
  return newGameState;
};

export const changeColour = (id: number, boardData: BoardData): BoardData => {
  const cities = clone(boardData.cities);
  const city = cities.find(c => c.id === id);
  if (!city) throw new Error(`No city found with id, ${id}`);
  city.colour = (city.colour + 1) % 4;
  const newGameData = { ...boardData, cities };
  return newGameData;
};

export const createRoute = (
  id1: number,
  id2: number,
  boardData: BoardData,
): BoardData => {
  console.log(`Attempting to create route..`);
  const newBoardData = clone(boardData);
  const [a, b] = [id1, id2].sort();
  newBoardData.connections.push({
    fromId: a,
    toId: b,
    id: newBoardData.connections.length,
  });
  return newBoardData;
};
