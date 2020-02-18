import React, { useContext } from 'react';
import GameStateContext from '../../contexts/gameStateContext';

interface PlayerPanelProps {}

const PlayerPanel: React.FC<PlayerPanelProps> = () => {
  const gameState = useContext(GameStateContext);

  return (
    <div>
      {gameState.players.map((player, i) => (
        // TODO make into a horizontal flex box with center justified.
        <div key={`player-${i}`}>
          <img src={`assets/pawns/pawn_${player.colour}.png`} height={'40px'} />
          <span> {player.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerPanel;
