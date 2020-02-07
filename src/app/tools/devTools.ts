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
  if (id1 === id2) return boardData;
  const [a, b] = [id1, id2].sort();
  if (boardData.connections.find(c => c.fromId === a && c.toId === b))
    return boardData;

  const newBoardData = clone(boardData);
  newBoardData.connections.push({
    fromId: a,
    toId: b,
    id: newBoardData.connections.length,
  });
  return newBoardData;
};

export const removeRoute = (id: number, board: BoardData): BoardData => {
  const newBoard = clone(board);
  newBoard.connections = newBoard.connections.filter(c => c.id !== id);
  return newBoard;
};

// * Call this at runtime, do not save the connections within each city's data.
const generateLinks = (board: BoardData) => {
  const newBoard = clone(board);
  newBoard.connections.forEach(connection => {
    const city1 = board.cities.find(c => c.id === connection.fromId);
    const city2 = board.cities.find(c => c.id === connection.toId);
    if (
      city1.connections.includes(city2.id) ||
      city2.connections.includes(city1.id)
    )
      throw new Error('Duplicate connection!');
    city1.connections.push(city2.id);
    city2.connections.push(city1.id);
  });

  return newBoard;
};
