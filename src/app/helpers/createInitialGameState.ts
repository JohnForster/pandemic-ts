import GameState from '../../types/gameData';
import boardData from '../../data/boardData';
import shuffle from 'just-shuffle';

const createInitialGameState = (
  { numberOfPlayers } = { numberOfPlayers: 12 },
): GameState => {
  const colours = shuffle(
    Array(12)
      .fill('')
      .map((x, i) => i),
  );

  const names = shuffle([
    'John',
    'Jemil',
    'Jamie',
    'Lola',
    'Siobhan',
    'Hakim',
    'Peter',
    'Paddy',
    'Paolo',
    'Rio',
    'Alice',
    'Samir',
  ]);

  const initialGameState: GameState = {
    cities: {},
    players: {},
    selectedPawnId: '',
    selectedCityId: '',
    devMode: false,
  };

  Object.values(boardData.cities).forEach(c => {
    initialGameState.cities[c.id] = { id: c.id, infection: 0 };
  });

  Array(numberOfPlayers)
    .fill('')
    .map((x, i) => ({
      id: i.toString(),
      colour: colours.pop(),
      locationId: Math.floor(Math.random() * 96).toString(),
      name: names.pop(),
    }))
    .forEach(p => {
      initialGameState.players[p.id] = p;
    });

  return initialGameState;
};

export default createInitialGameState;
