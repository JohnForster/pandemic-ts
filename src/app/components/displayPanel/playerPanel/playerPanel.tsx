import React, { useContext, useState } from 'react';
import GameStateContext from '../../../contexts/gameStateContext';
import * as Styled from './styled';
import { ActionType } from '../../../../types/actions';
import { boardData } from '../../../../data/boardData';
import { ROLES } from '../../../../data/roles';

interface PlayerPanelProps {}

const getLocation = (id: string) => {
  const city = boardData.cities[id];
  return { name: city.name, colour: city.colour! };
};

// ? Location grid?
// const getLocationGrid = (id: string) => {
//   const DIVISIONS_Y = 4;
//   const DIVISIONS_X = 6;
//   const city = boardData.cities[id];
//   const letter = String.fromCharCode(
//     Math.floor(city.location.x / (100 / DIVISIONS_X)) + 65,
//   );
//   const number = Math.ceil(city.location.y / (100 / DIVISIONS_Y));
//   return letter + number.toString();
// };

const PlayerPanel: React.FC<PlayerPanelProps> = () => {
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

  const handlePawnClick = (id: string) => (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (id === gameState.selectedPawnId)
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    dispatch({ type: ActionType.SELECT_PAWN, payload: { id } });
  };

  const enableDevMode = () => dispatch({ type: ActionType.DEV_MODE_ON });

  return (
    <Styled.Container>
      {Object.values(gameState.players).map(player => (
        <Styled.PlayerBox key={`player-${player.id}`}>
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
              onKeyDown={(e): void =>
                e.key === 'Enter' ? changeCurrentlyEditingName(null) : null
              }
              onBlur={(): void => changeCurrentlyEditingName(null)}
              onFocus={handleFocus}
              autoFocus={true}
            />
          )}
          {nameChangeId !== player.id && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Styled.PlayerName
                  isCurrentPlayer={gameState.currentPlayerId === player.id}
                  onDoubleClick={(): void =>
                    changeCurrentlyEditingName(player.id)
                  }
                >
                  {player.name}
                </Styled.PlayerName>
                <Styled.Role>{ROLES[player.colour].role}</Styled.Role>
              </div>
              <Styled.PlayerLocation
                colour={getLocation(player.locationId).colour}
              >
                {getLocation(player.locationId).name}
              </Styled.PlayerLocation>
            </>
          )}
        </Styled.PlayerBox>
      ))}
      <button onClick={advanceToNextPlayer}>Next Turn</button>
      <button onClick={enableDevMode}>Dev Options</button>
    </Styled.Container>
  );
};

export default PlayerPanel;
