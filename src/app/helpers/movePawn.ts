import GameState from '../../types/gameData';
import clone from 'just-clone';

const movePawn = (
  pawnId: string,
  cityId: string,
  gameState: GameState,
): GameState => {
  console.log('pawnId, cityId:', pawnId, cityId);
  const newGameState = clone(gameState);
  const player = newGameState.players[pawnId];
  console.log(newGameState.players);
  player.locationId = cityId;
  return newGameState;
};

export default movePawn;
