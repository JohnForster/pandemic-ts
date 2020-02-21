import GameState from '../../types/gameData';
import movePawn from '../helpers/movePawn';
import { Action, ActionType } from '../../types/actions';

type PlayersReducer = React.Reducer<GameState['players'], Action>;
export const playersReducer: PlayersReducer = (playersState, action) => {
  switch (action.type) {
    case ActionType.MOVE_PLAYER:
      return movePawn(
        playersState,
        action.payload.playerId,
        action.payload.cityId,
      );
    default:
      return playersState;
  }
};
