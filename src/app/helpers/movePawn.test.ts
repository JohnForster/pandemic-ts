import { describe, test, expect } from 'vitest';
import movePawn from './movePawn';
import GameState from '../../types/gameData';

const players: GameState['players'] = {
  '0': { id: '0', colour: 1, locationId: '10', name: 'Player 1' },
  '1': { id: '1', colour: 2, locationId: '20', name: 'Player 2' },
};

describe('movePawn', () => {
  test('updates only the moved player, without mutating the input', () => {
    const next = movePawn(players, { playerId: '0', cityId: '30' });

    expect(next['0'].locationId).toBe('30');
    expect(next['1'].locationId).toBe('20');
    expect(players['0'].locationId).toBe('10');
    expect(next).not.toBe(players);
  });
});
