import GameState, { BoardData } from '../../types/gameData';

const QUARANTINE_SPECIALIST_ID = 17;

// A Quarantine Specialist protects their own city and every city directly
// connected to it from infection/outbreaks.
export const getProtectedCityIds = (
  players: GameState['players'],
  boardData: BoardData,
): Set<string> => {
  const quarantinePlayer = Object.values(players).find(
    p => p.colour === QUARANTINE_SPECIALIST_ID,
  );
  if (!quarantinePlayer) return new Set();

  const quarantineCityId = quarantinePlayer.locationId;
  const protectedCityIds = new Set([quarantineCityId]);
  for (const connection of Object.values(boardData.connections)) {
    if (connection.fromId === quarantineCityId) {
      protectedCityIds.add(connection.toId);
    }
    if (connection.toId === quarantineCityId) {
      protectedCityIds.add(connection.fromId);
    }
  }
  return protectedCityIds;
};
