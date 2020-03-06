import React, { useContext, useState } from 'react';
import GameStateContext from '../../contexts/gameStateContext';
import * as Styled from './styled';
import { ActionType } from '../../../types/actions';

interface PlayerPanelProps {}

const PlayerPanel: React.FC<PlayerPanelProps> = () => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const [nameChangeId, setNameChangeId] = useState<string>(null);
  const [name, setName] = useState<string>(null);

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const changeCurrentlyEditingName = (id: string): void => {
    if (nameChangeId)
      dispatch({
        type: ActionType.CHANGE_NAME,
        payload: { playerId: nameChangeId, name },
      });

    setNameChangeId(id);
    if (id) setName(gameState.players[id].name);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void =>
    event.target.select();

  const advanceToNextPlayer = (): void => {
    dispatch({ type: ActionType.NEXT_PLAYER });
  };

  return (
    <div>
      {Object.values(gameState.players).map(player => (
        // TODO make into a horizontal flex box with center justified.
        <Styled.PlayerBox key={`player-${player.id}`}>
          <Styled.PawnImage
            src={`assets/pawns/pawn_${player.colour}.png`}
            alt={`${player.name}'s Pawn`}
          />
          {nameChangeId === player.id && (
            <Styled.NameInput
              type="text"
              value={name}
              onChange={onFormChange}
              onKeyDown={(e): void =>
                e.key === 'Enter' ? changeCurrentlyEditingName(null) : null
              }
              onBlur={(): void => changeCurrentlyEditingName(null)}
              onFocus={handleFocus}
              autoFocus={true}
            />
          )}
          {nameChangeId !== player.id && (
            <span
              onDoubleClick={(): void => changeCurrentlyEditingName(player.id)}
            >
              {player.name}
            </span>
          )}
        </Styled.PlayerBox>
      ))}
      <button onClick={advanceToNextPlayer}>Next Turn</button>
    </div>
  );
};

export default PlayerPanel;
