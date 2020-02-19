import React, { useContext } from 'react';
import GameStateContext from '../../contexts/gameStateContext';

interface PlayerPanelProps {}

const PlayerPanel: React.FC<PlayerPanelProps> = () => {
  const gameState = useContext(GameStateContext);

  return (
    <div>
      {Object.values(gameState.players).map(player => (
        // TODO make into a horizontal flex box with center justified.
        <div key={`player-${player.id}`}>
          <img
            src={`assets/pawns/pawn_${player.colour}.png`}
            height={'40px'}
            alt={`${player.name}'s Pawn`}
          />
          <span> {player.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerPanel;
