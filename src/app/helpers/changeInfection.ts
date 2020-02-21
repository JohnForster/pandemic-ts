import GameState from '../../types/gameData';
import clone from 'just-clone';
import clamp from 'just-clamp';

export const increment = (
  citiesState: GameState['cities'],
  cityId: string,
): GameState['cities'] => {
  const newCitiesState = clone(citiesState);
  const city = newCitiesState[cityId];
  city.infection = clamp(0, city.infection + 1, 3);
  return newCitiesState;
};

export const decrement = (
  citiesState: GameState['cities'],
  cityId: string,
): GameState['cities'] => {
  const newCitiesState = clone(citiesState);
  const city = newCitiesState[cityId];
  city.infection = clamp(0, city.infection - 1, 3);
  return newCitiesState;
};
