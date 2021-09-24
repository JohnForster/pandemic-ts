import React, { useContext, useState } from 'react';
import GameStateContext from '../../contexts/gameStateContext';
import * as Styled from './styled';
import { ActionType } from '../../../types/actions';
import { boardData } from '../../../data/boardData';

interface PlayerPanelProps {}

const getLocation = (id: string) => {
  return boardData.cities[id].name;
};

const getLocationGrid = (id: string) => {
  const DIVISIONS_Y = 4;
  const DIVISIONS_X = 6;
  const city = boardData.cities[id];
  const letter = String.fromCharCode(
    Math.floor(city.location.x / (100 / DIVISIONS_X)) + 65,
  );
  const number = Math.ceil(city.location.y / (100 / DIVISIONS_Y));
  return letter + number.toString();
};

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
              style={
                gameState.currentPlayerId === player.id
                  ? { textDecoration: 'underline' }
                  : {}
              }
            >
              {player.name} - {getLocation(player.locationId)}
            </span>
          )}
        </Styled.PlayerBox>
      ))}
      <button onClick={advanceToNextPlayer}>Next Turn</button>
    </div>
  );
};

export default PlayerPanel;
