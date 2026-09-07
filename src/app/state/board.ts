import GameState from '../../types/gameData';
import { Action, ActionType } from '../../types/actions';
import {
  changeLocation,
  changeColour,
  createRoute,
  removeRoute,
} from '../tools/devTools';

type BoardReducer = React.Reducer<GameState['board'], Action>;
export const boardReducer: BoardReducer = (boardState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_LOCATION:
      return changeLocation(
        action.payload.id,
        { x: action.payload.x, y: action.payload.y },
        boardState,
      );
    case ActionType.CHANGE_CITY_COLOUR:
      return changeColour(action.payload.id, boardState);
    case ActionType.CREATE_ROUTE:
      return createRoute(action.payload.id1, action.payload.id2, boardState);
    case ActionType.REMOVE_ROUTE:
      return removeRoute(action.payload.id, boardState);
    default:
      return boardState;
  }
};
