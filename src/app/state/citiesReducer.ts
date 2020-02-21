import GameState from '../../types/gameData';
import { Action, ActionType } from '../../types/actions';
import { increment, decrement } from '../helpers/changeInfection';

type CitiesReducer = React.Reducer<GameState['cities'], Action>;
export const citiesReducer: CitiesReducer = (citiesState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CITY:
      return increment(citiesState, action.payload.id);
    case ActionType.DECREMENT_CITY:
      return decrement(citiesState, action.payload.id);
    default:
      return citiesState;
  }
};
