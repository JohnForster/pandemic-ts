import GameState from '../../types/gameData';
import {
  Action,
  ActionType,
  IncrementAction,
  DecrementAction,
} from '../../types/actions';
import { increment, decrement } from '../helpers/changeInfection';

export const incrementCity = (id: string): IncrementAction => ({
  type: ActionType.INCREMENT_CITY,
  payload: { id },
});

export const decrementCity = (id: string): DecrementAction => ({
  type: ActionType.DECREMENT_CITY,
  payload: { id },
});

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
