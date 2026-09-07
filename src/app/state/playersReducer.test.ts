import { describe, test, expect } from 'vitest';
import { playersReducer } from './playersReducer';
import { ActionType } from '../../types/actions';
import GameState from '../../types/gameData';

const players: GameState['players'] = {
  '0': { id: '0', colour: 1, locationId: '10', name: 'Player 1' },
  '1': { id: '1', colour: 2, locationId: '20', name: 'Player 2' },
};

describe('playersReducer', () => {
  test('MOVE_PLAYER updates only the moved player', () => {
    const next = playersReducer(players, {
      type: ActionType.MOVE_PLAYER,
      payload: { playerId: '0', cityId: '99' },
    });

    expect(next['0'].locationId).toBe('99');
    expect(next['1'].locationId).toBe('20');
  });

  test('CHANGE_NAME updates only the named player', () => {
    const next = playersReducer(players, {
      type: ActionType.CHANGE_NAME,
      payload: { playerId: '1', name: 'Renamed' },
    });

    expect(next['1'].name).toBe('Renamed');
    expect(next['0'].name).toBe('Player 1');
  });

  test('unrelated actions pass the state through unchanged', () => {
    const next = playersReducer(players, {
      type: ActionType.SELECT_CITY,
      payload: { id: '10' },
    });

    expect(next).toBe(players);
  });
});
