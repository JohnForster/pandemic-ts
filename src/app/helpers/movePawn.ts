import GameState from '../../types/gameData';
import clone from 'just-clone';

const movePawn = (
  playersState: GameState['players'],
  { playerId, cityId }: { playerId: string; cityId: string },
): GameState['players'] => {
  console.log('pawnId, cityId:', playerId, cityId);
  const newPlayersState = clone(playersState);
  const player = newPlayersState[playerId];
  console.log(newPlayersState.players);
  player.locationId = cityId;
  return newPlayersState;
};

export default movePawn;
