import React, { useContext } from 'react';
import GameState, { BoardData } from '../../../../types/gameData';
import copyStringToClipboard from '../../../utils/copyStringToClipboard';
import GameStateContext from '../../../contexts/gameStateContext';
import { ActionType } from '../../../../types/actions';
import keys from '../../../utils/keys';

interface DevPanelProps {
  board: BoardData;
}

const DevPanel: React.FC<DevPanelProps> = (props: DevPanelProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const save = (): void => {
    const newBoard: BoardData = { cities: props.board.cities, connections: {} };
    Object.values(props.board.connections).forEach((connection, i) => {
      const id = (i + 1).toString();
      newBoard.connections[id] = {
        ...connection,
        id,
      };
    });

    copyStringToClipboard(JSON.stringify(newBoard, null, 2));
  };

  const handleChange = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    dispatch({
      type: ActionType.TOGGLE_DEV_FUNCTION,
      payload: { function: target.value as keyof GameState['devToggles'] },
    });
    dispatch({
      type: ActionType.SELECT_CITY,
      payload: { id: null },
    });
    e.stopPropagation();
  };

  const reset = () => {
    dispatch({ type: ActionType.RESET });
  };

  const numberOfPlayers = Object.keys(gameState.players).length;

  return (
    <>
      <div>
        Selected City: {gameState.selectedCityId ?? 'none'} <br />
        <form>
          {keys(gameState.devToggles).map((devToggle, i) => (
            <label key={`radio-element-${i}`}>
              <input
                type="radio"
                checked={gameState.devToggles[devToggle]}
                onChange={handleChange}
                value={devToggle}
              />
              {devToggle
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())}
              <br />
            </label>
          ))}
        </form>
        <button>-</button>
        <span>{`${numberOfPlayers} players`}</span>
        <button>+</button>
        <br />
        <button onClick={save}>Copy Board to Clipboard</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default DevPanel;
