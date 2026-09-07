import { describe, test, expect } from 'vitest';
import { citiesReducer, infectCity, treatCity } from './cities';
import { ActionType } from '../../types/actions';
import GameState from '../../types/gameData';

const cities: GameState['cities'] = {
  '10': {
    id: '10',
    infection: { blue: 0, yellow: 0, black: 0, red: 4 },
    researchStation: false,
  },
};

describe('citiesReducer', () => {
  test('INCREMENT_CITY increases infection but clamps at 4', () => {
    const oneStep = citiesReducer(cities, infectCity('10', 'blue'));
    expect(oneStep['10'].infection.blue).toBe(1);

    const atMax = citiesReducer(cities, infectCity('10', 'red'));
    expect(atMax['10'].infection.red).toBe(4);
  });

  test('DECREMENT_CITY decreases infection but clamps at 0', () => {
    const next = citiesReducer(cities, treatCity('10', 'blue'));
    expect(next['10'].infection.blue).toBe(0);
  });

  test('TOGGLE_RESEARCH_STATION flips the flag', () => {
    const next = citiesReducer(cities, {
      type: ActionType.TOGGLE_RESEARCH_STATION,
      payload: { id: '10' },
    });

    expect(next['10'].researchStation).toBe(true);
  });
});
