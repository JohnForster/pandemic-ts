import GameState from '../../types/gameData';
import { boardData } from '../../data/boardData';
import shuffle from 'just-shuffle';
import { ROLES } from '../../data/roles';

const isGameState = (obj: unknown): obj is GameState => {
  return true;
};

const defaultArgs = {
  numberOfPlayers: 12,
  loadExisting: true,
};
type CreateGameStateOptions = Partial<typeof defaultArgs>;

const createInitialGameState = (
  options: CreateGameStateOptions = {},
): GameState => {
  const { numberOfPlayers, loadExisting } = { ...defaultArgs, ...options };
  const prevGameState = localStorage.getItem('game');
  if (loadExisting && prevGameState) {
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
    ROLES.filter(role => role.inUse).map((role, i) => role.pawnId),
  );

  // const names = shuffle([
  //   'John',
  //   'Jemil',
  //   'Jamie',
  //   'Thomas',
  //   'Sam',
  //   'Hakim',
  //   'Peter',
  //   'Paddy',
  //   'Tara',
  //   'Joe',
  //   'Emily',
  //   'Samir',
  // ]);

  const names = [
    'Player 1',
    'Player 2',
    'Player 3',
    'Player 4',
    'Player 5',
    'Player 6',
    'Player 7',
    'Player 8',
    'Player 9',
    'Player 10',
    'Player 11',
    'Player 12',
  ].reverse();

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
    selectedInfectionColour: 'blue',
  };

  const ATLANTA_ID = '10';
  Object.values(boardData.cities).forEach(c => {
    initialGameState.cities[c.id] = {
      id: c.id,
      infection: { blue: 0, yellow: 0, black: 0, red: 0 },
      researchStation: c.id === ATLANTA_ID,
    };
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
