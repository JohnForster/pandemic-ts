import { describe, test, expect, beforeEach } from 'vitest';
import { gameStateReducer } from './gameStateReducer';
import createInitialGameState from '../helpers/createInitialGameState';
import { ActionType } from '../../types/actions';

describe('gameStateReducer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('PREVIOUS_PLAYER wraps to the last player instead of going negative', () => {
    const state = createInitialGameState({
      numberOfPlayers: 4,
      loadExisting: false,
    });
    expect(state.currentPlayerId).toBe('0');

    const next = gameStateReducer(state, {
      type: ActionType.PREVIOUS_PLAYER,
    });

    expect(next.currentPlayerId).toBe('3');
  });

  test('NEXT_PLAYER wraps back to the first player', () => {
    const state = {
      ...createInitialGameState({ numberOfPlayers: 4, loadExisting: false }),
      currentPlayerId: '3',
    };

    const next = gameStateReducer(state, { type: ActionType.NEXT_PLAYER });

    expect(next.currentPlayerId).toBe('0');
  });

  test('LOAD with nothing in storage returns the current state instead of crashing', () => {
    const state = createInitialGameState({
      numberOfPlayers: 4,
      loadExisting: false,
    });

    expect(() =>
      gameStateReducer(state, { type: ActionType.LOAD }),
    ).not.toThrow();

    const next = gameStateReducer(state, { type: ActionType.LOAD });
    expect(next).toEqual(state);
  });

  test('LOAD restores a previously saved game', () => {
    const state = createInitialGameState({
      numberOfPlayers: 4,
      loadExisting: false,
    });
    const saved = { ...state, currentPlayerId: '2' };
    localStorage.setItem('game', JSON.stringify(saved));

    const next = gameStateReducer(state, { type: ActionType.LOAD });

    expect(next.currentPlayerId).toBe('2');
  });
});
