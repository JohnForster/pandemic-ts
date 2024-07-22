import clone from 'just-clone';
import { BoardData, Connection } from '../../types/gameData';
import CityColour from '../../types/enums/cityColour';

const toPercentage = (n: number, decimalPlaces = 1): number => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(n * 100 * multiplier) / multiplier;
};

export const changeLocation = (
  id: string,
  { x, y }: { x: number; y: number },
  boardData: BoardData,
): BoardData => {
  const cities = clone(boardData.cities);
  const city = cities[id];
  if (!city) throw new Error(`No city found with id, ${id}`);

  city.location = { x: toPercentage(x), y: toPercentage(y) };
  const newGameState = { ...boardData, cities };
  return newGameState;
};

export const changeColour = (id: string, boardData: BoardData): BoardData => {
  const cities = clone(boardData.cities);
  const city = cities[id];
  if (!city) throw new Error(`No city found with id, ${id}`);
  const cityColours: CityColour[] = ['blue', 'yellow', 'black', 'red'];
  const index = cityColours.indexOf(city.colour);
  const newIndex = (index + 1) % 4;
  city.colour = cityColours[newIndex];
  const newGameData = { ...boardData, cities };
  return newGameData;
};

export const createRoute = (
  id1: string,
  id2: string,
  boardData: BoardData,
): BoardData => {
  console.log(`Attempting to create route..`);
  if (id1 === id2) return boardData;
  const [a, b] = [id1, id2].sort();

  const connectionExists = Object.values(boardData.connections).find(
    c => c.fromId === a && c.toId === b,
  );

  if (connectionExists) return boardData;

  const newBoardData = clone(boardData);
  const idArray = Object.keys(newBoardData.connections);
  const id =
    idArray.map(idStr => parseInt(idStr)).sort((a, b) => a - b)[
      idArray.length - 1
    ] + 1;
  newBoardData.connections[id] = {
    fromId: a,
    toId: b,
    id: id.toString(),
  };
  return newBoardData;
};

export const removeRoute = (id: string, board: BoardData): BoardData => {
  console.log('Removing route', id);
  const newBoard = clone(board);
  const connections = Object.values(newBoard.connections);
  const newConnections: { [key: string]: Connection } = {};
  connections
    .filter(c => c.id !== id)
    .forEach((c, i) => {
      const id = i.toString();
      newConnections[id] = {
        ...c,
        id,
      };
    });
  newBoard.connections = newConnections;
  return newBoard;
};

// TODO Call this at runtime, do not save the connections within each city's data.
// const generateLinks = (board: BoardData) => {
//   const newBoard = clone(board);
//   newBoard.connections.forEach(connection => {
//     const city1 = board.cities.find(c => c.id === connection.fromId);
//     const city2 = board.cities.find(c => c.id === connection.toId);
//     if (
//       city1.connections.includes(city2.id) ||
//       city2.connections.includes(city1.id)
//     )
//       throw new Error('Duplicate connection!');
//     city1.connections.push(city2.id);
//     city2.connections.push(city1.id);
//   });

//   return newBoard;
// };
