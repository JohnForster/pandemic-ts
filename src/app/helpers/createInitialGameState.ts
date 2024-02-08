import GameState from '../../types/gameData';
import { boardData } from '../../data/boardData';
import shuffle from 'just-shuffle';

const isGameState = (obj: unknown): obj is GameState => {
  return true;
};

const createInitialGameState = (
  { numberOfPlayers } = { numberOfPlayers: 12 },
): GameState => {
  const prevGameState = localStorage.getItem('game');
  if (prevGameState) {
    try {
      const prevState = JSON.parse(prevGameState);
      if (isGameState(prevState)) {
        return prevState;
      }
    } catch (_) {
      console.error('Unable to validate previous game state');
    }
  }

  const colours = shuffle(
    Array(12)
      .fill('')
      .map((x, i) => i),
  );

  const names = shuffle([
    'John',
    'Jemil',
    'Jamie',
    'Twix',
    'Sam',
    'Hakim',
    'Peter',
    'Paddy',
    'Tara',
    'Joe',
    'Emily',
    'Samir',
  ]);

  const initialGameState: GameState = {
    currentPlayerId: '0',
    devToggles: {
      changeLocation: false,
      changeColour: false,
      createRoutes: false,
      removeRoutes: false,
    },
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
      locationId: '10',
      // locationId: Math.floor(Math.random() * 96).toString(),
      name: names.pop(),
    }))
    .forEach(p => {
      initialGameState.players[p.id] = p;
    });

  return initialGameState;
};

export default createInitialGameState;
