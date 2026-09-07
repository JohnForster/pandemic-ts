import { describe, test, expect, beforeEach } from 'vitest';
import createInitialGameState from './createInitialGameState';
import { boardData } from '../../data/boardData';

describe('createInitialGameState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('seeds one city entry per board city, all uninfected except Atlanta', () => {
    const state = createInitialGameState({ loadExisting: false });

    const cityIds = Object.keys(boardData.cities);
    expect(Object.keys(state.cities)).toHaveLength(cityIds.length);
    expect(state.cities['10'].researchStation).toBe(true);
    expect(
      Object.values(state.cities).filter(c => c.researchStation),
    ).toHaveLength(1);
  });

  test('deals the requested number of players', () => {
    const state = createInitialGameState({
      numberOfPlayers: 5,
      loadExisting: false,
    });

    expect(Object.keys(state.players)).toHaveLength(5);
  });

  test('clones the board data rather than sharing the module-level reference', () => {
    const state = createInitialGameState({ loadExisting: false });
    expect(state.board).toEqual(boardData);
    expect(state.board).not.toBe(boardData);
  });

  test('falls back to a fresh state when the stored game is malformed', () => {
    localStorage.setItem('game', JSON.stringify({ not: 'a game state' }));

    expect(() =>
      createInitialGameState({ loadExisting: true }),
    ).not.toThrow();

    const state = createInitialGameState({ loadExisting: true });
    expect(state.currentPlayerId).toBe('0');
    expect(state.board).toBeDefined();
  });

  test('restores a valid previously saved game', () => {
    const saved = createInitialGameState({ loadExisting: false });
    saved.currentPlayerId = '7';
    localStorage.setItem('game', JSON.stringify(saved));

    const state = createInitialGameState({ loadExisting: true });
    expect(state.currentPlayerId).toBe('7');
  });
});
