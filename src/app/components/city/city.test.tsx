import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Dispatch } from 'react';
import { City } from './city';
import GameStateContext from '../../contexts/gameStateContext';
import createInitialGameState from '../../helpers/createInitialGameState';
import { Action } from '../../../types/actions';
import { CityData } from '../../../types/gameData';

const cityData: CityData = {
  id: 'test-city',
  name: 'Test City',
  location: { x: 10, y: 20 },
  connections: [],
  colour: 'blue',
};

const cityState = {
  id: 'test-city',
  infection: { blue: 0, yellow: 0, black: 0, red: 0 },
  researchStation: false,
};

const renderCity = (overrides: Partial<Parameters<typeof City>[0]> = {}) => {
  const gameState = createInitialGameState({
    numberOfPlayers: 1,
    loadExisting: false,
  });
  const onSelect = vi.fn();
  const dispatch = vi.fn() as unknown as Dispatch<Action>;

  render(
    <GameStateContext.Provider value={[gameState, dispatch]}>
      <City
        data={cityData}
        cityState={cityState}
        isSelected={false}
        isProtected={false}
        onSelect={onSelect}
        players={[]}
        {...overrides}
      />
    </GameStateContext.Provider>,
  );

  return { onSelect, dispatch };
};

describe('City', () => {
  test('renders the city name', () => {
    renderCity();
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  test('clicking the city calls onSelect with its id', async () => {
    const user = userEvent.setup();
    const { onSelect } = renderCity();

    await user.click(screen.getByTestId('city-container-test-city'));

    expect(onSelect).toHaveBeenCalledWith('test-city', false);
  });

  test('a protected city ignores infect double-clicks', async () => {
    const user = userEvent.setup();
    const { dispatch } = renderCity({ isProtected: true });

    await user.dblClick(screen.getByTestId('city-circle-test-city'));

    expect(dispatch).not.toHaveBeenCalled();
  });
});
