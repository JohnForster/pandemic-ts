import { describe, test, expect } from 'vitest';
import { getProtectedCityIds } from './getProtectedCityIds';
import GameState, { BoardData } from '../../types/gameData';

const boardData: BoardData = {
  cities: {
    a: { id: 'a', name: 'A', location: { x: 0, y: 0 }, connections: [] },
    b: { id: 'b', name: 'B', location: { x: 0, y: 0 }, connections: [] },
    c: { id: 'c', name: 'C', location: { x: 0, y: 0 }, connections: [] },
    d: { id: 'd', name: 'D', location: { x: 0, y: 0 }, connections: [] },
  },
  connections: {
    '1': { id: '1', fromId: 'a', toId: 'b' },
    '2': { id: '2', fromId: 'c', toId: 'a' },
  },
};

const QUARANTINE_SPECIALIST_ID = 17;

describe('getProtectedCityIds', () => {
  test('returns an empty set when no Quarantine Specialist is in play', () => {
    const players: GameState['players'] = {
      '0': { id: '0', colour: 1, locationId: 'a', name: 'Player 1' },
    };

    expect(() => getProtectedCityIds(players, boardData)).not.toThrow();
    expect(getProtectedCityIds(players, boardData).size).toBe(0);
  });

  test('protects the Quarantine Specialist city and its direct connections', () => {
    const players: GameState['players'] = {
      '0': {
        id: '0',
        colour: QUARANTINE_SPECIALIST_ID,
        locationId: 'a',
        name: 'Player 1',
      },
    };

    const protectedCityIds = getProtectedCityIds(players, boardData);

    expect(protectedCityIds).toEqual(new Set(['a', 'b', 'c']));
    expect(protectedCityIds.has('d')).toBe(false);
  });
});
