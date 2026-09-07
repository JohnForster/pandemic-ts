import { describe, test, expect } from 'vitest';
import { infect, treat } from './changeInfection';
import GameState from '../../types/gameData';

const cities: GameState['cities'] = {
  '10': {
    id: '10',
    infection: { blue: 0, yellow: 4, black: 0, red: 0 },
    researchStation: false,
  },
};

describe('changeInfection', () => {
  test('infect increments a city colour, without mutating the input', () => {
    const next = infect(cities, 'blue', '10');

    expect(next['10'].infection.blue).toBe(1);
    expect(cities['10'].infection.blue).toBe(0);
  });

  test('infect clamps at 4', () => {
    const next = infect(cities, 'yellow', '10');
    expect(next['10'].infection.yellow).toBe(4);
  });

  test('treat decrements a city colour and clamps at 0', () => {
    const next = treat(cities, 'blue', '10');
    expect(next['10'].infection.blue).toBe(0);
  });
});
