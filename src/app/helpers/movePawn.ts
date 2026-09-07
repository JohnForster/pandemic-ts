import GameState from '../../types/gameData';
import clone from 'just-clone';

const movePawn = (
  playersState: GameState['players'],
  { playerId, cityId }: { playerId: string; cityId: string },
): GameState['players'] => {
  const newPlayersState = clone(playersState);
  const player = newPlayersState[playerId];
  player.locationId = cityId;
  return newPlayersState;
};

export default movePawn;
