import React, { useContext, useState } from 'react';
import GameStateContext from '../../../contexts/gameStateContext';
import * as Styled from './styled';
import { ActionType } from '../../../../types/actions';
import { boardData } from '../../../../data/boardData';
import { ROLES } from '../../../../data/roles';
import { usePawnClick } from '../../../hooks/usePawnClick';

interface PlayerPanelProps {}

const getLocation = (id: string) => {
  const city = boardData.cities[id];
  return { name: city.name, colour: city.colour! };
};

export const PlayerPanel: React.FC<PlayerPanelProps> = () => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const [nameChangeId, setNameChangeId] = useState<string>(null);
  const [name, setName] = useState<string>(null);

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
  const returnToPreviousPlayer = (): void => {
    dispatch({ type: ActionType.PREVIOUS_PLAYER });
  };

  const handlePawnClick = usePawnClick();

  const enableDevMode = () => dispatch({ type: ActionType.DEV_MODE_ON });

  return (
    <Styled.Container>
      {Object.values(gameState.players).map(player => (
        <Styled.PlayerBox
          key={`player-${player.id}`}
          $isCurrentPlayer={gameState.currentPlayerId === player.id}
        >
          <Styled.PawnImage
            src={`assets/pawns/pawn_${player.colour}.png`}
            alt={`${player.name}'s Pawn`}
            onClick={handlePawnClick(player.id)}
          />
          {nameChangeId === player.id && (
            <Styled.NameInput
              type="text"
              value={name}
              onChange={onFormChange}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void =>
                e.key === 'Enter' ? changeCurrentlyEditingName(null) : null
              }
              onBlur={(): void => changeCurrentlyEditingName(null)}
              onFocus={handleFocus}
              autoFocus={true}
            />
          )}
          {nameChangeId !== player.id && (
            <>
              <Styled.NameColumn>
                <Styled.PlayerName
                  $isCurrentPlayer={gameState.currentPlayerId === player.id}
                  onDoubleClick={(): void =>
                    changeCurrentlyEditingName(player.id)
                  }
                >
                  {player.name}
                </Styled.PlayerName>
                <Styled.Role>
                  {ROLES[player.colour]?.role ?? 'NO ROLE FOUND'}
                </Styled.Role>
              </Styled.NameColumn>
              <Styled.PlayerLocation
                $colour={getLocation(player.locationId).colour}
              >
                {getLocation(player.locationId).name}
              </Styled.PlayerLocation>
            </>
          )}
        </Styled.PlayerBox>
      ))}
      <Styled.Footer>
        <button onClick={advanceToNextPlayer}>Next Turn</button>
        <Styled.PreviousButton onClick={returnToPreviousPlayer}>
          {'<'}
        </Styled.PreviousButton>
        <button onClick={enableDevMode}>Dev Options</button>
      </Styled.Footer>
    </Styled.Container>
  );
};
