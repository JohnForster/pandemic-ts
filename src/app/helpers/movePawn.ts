import GameState from '../../types/gameData';
import clone from 'just-clone';

const movePawn = (
  playersState: GameState['players'],
  pawnId: string,
  cityId: string,
): GameState['players'] => {
  console.log('pawnId, cityId:', pawnId, cityId);
  const newPlayersState = clone(playersState);
  const player = newPlayersState[pawnId];
  console.log(newPlayersState.players);
  player.locationId = cityId;
  return newPlayersState;
};

export default movePawn;
