import GameState from '../../types/gameData';
import movePawn from '../helpers/movePawn';
import { Action, ActionType } from '../../types/actions';

const changeName = (
  playerState: GameState['players'],
  { playerId, name }: { playerId: string; name: string },
): GameState['players'] => {
  const player = playerState[playerId];
  const newPlayer = { ...player, name };
  console.log({ ...playerState, [playerId]: newPlayer });
  return { ...playerState, [playerId]: newPlayer };
};

type PlayersReducer = React.Reducer<GameState['players'], Action>;
export const playersReducer: PlayersReducer = (playersState, action) => {
  console.log('Inside playersReducer');
  switch (action.type) {
    case ActionType.MOVE_PLAYER:
      return movePawn(playersState, action.payload);
    case ActionType.CHANGE_NAME:
      return changeName(playersState, action.payload);
    default:
      return playersState;
  }
};
