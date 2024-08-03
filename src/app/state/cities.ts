import GameState from '../../types/gameData';
import {
  Action,
  ActionType,
  IncrementAction,
  DecrementAction,
} from '../../types/actions';
import { infect, treat } from '../helpers/changeInfection';
import CityColour from '../../types/enums/cityColour';

export const infectCity = (
  id: string,
  colour: CityColour,
): IncrementAction => ({
  type: ActionType.INCREMENT_CITY,
  payload: { id, colour },
});

export const treatCity = (id: string, colour: CityColour): DecrementAction => ({
  type: ActionType.DECREMENT_CITY,
  payload: { id, colour },
});

const toggleResearchStation = (
  citiesState: GameState['cities'],
  id: string,
) => {
  const city = citiesState[id];
  return {
    ...citiesState,
    [id]: {
      ...city,
      researchStation: !city.researchStation,
    },
  };
};

type CitiesReducer = React.Reducer<GameState['cities'], Action>;
export const citiesReducer: CitiesReducer = (citiesState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return infect(citiesState, action.payload.colour, action.payload.id);
    case ActionType.DECREMENT_CITY:
      return treat(citiesState, action.payload.colour, action.payload.id);
    case ActionType.TOGGLE_RESEARCH_STATION:
      return toggleResearchStation(citiesState, action.payload.id);
    default:
      return citiesState;
  }
};
