import GameState from '../../types/gameData';
import clone from 'just-clone';
import clamp from 'just-clamp';
import CityColour from '../../types/enums/cityColour';

export const infect = (
  citiesState: GameState['cities'],
  colour: CityColour,
  cityId: string,
): GameState['cities'] => {
  const newCitiesState = clone(citiesState);
  const city = newCitiesState[cityId];
  const newInfection = clamp(0, city.infection[colour] + 1, 4);
  city.infection[colour] = newInfection;
  return newCitiesState;
};

export const treat = (
  citiesState: GameState['cities'],
  colour: CityColour,
  cityId: string,
): GameState['cities'] => {
  const newCitiesState = clone(citiesState);
  const city = newCitiesState[cityId];
  const newInfection = clamp(0, city.infection[colour] - 1, 4);
  city.infection[colour] = newInfection;
  return newCitiesState;
};
