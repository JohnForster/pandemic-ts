import GameState from '../../types/gameData';
import clone from 'just-clone';

const movePawn = (
  pawnId: number,
  cityId: number,
  gameState: GameState,
): GameState => {
  const newGameState = clone(gameState);
  const player = newGameState.players.find(p => p.id === pawnId);
  player.locationId = cityId;
  return newGameState;
};

export default movePawn;
