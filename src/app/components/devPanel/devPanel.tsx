import React, { useContext } from 'react';
import GameState, { BoardData } from '../../../types/gameData';
import copyStringToClipboard from '../../utils/copyStringToClipboard';
import GameStateContext from '../../contexts/gameStateContext';
import { ActionType } from '../../../types/actions';

interface DevPanelProps {
  gameState: GameState;
  board: BoardData;
  dev: {
    devToggles: {
      [key: string]: boolean;
      changeLocation: boolean;
      changeColour: boolean;
      createRoutes: boolean;
      removeRoutes: boolean;
    };
    setDevToggles: (devToggles: {
      changeLocation: boolean;
      changeColour: boolean;
      createRoutes: boolean;
      removeRoutes: boolean;
    }) => void;
  };
}

const DevPanel: React.FC<DevPanelProps> = (props: DevPanelProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const save = (): void => {
    copyStringToClipboard(
      `module.exports = ${JSON.stringify(props.board, null, 2)}`,
    );
  };

  const handleChange = (e: React.FormEvent): void => {
    const devToggles = {
      changeLocation: false,
      changeColour: false,
      createRoutes: false,
      removeRoutes: false,
    };
    const target = e.target as HTMLInputElement;
    devToggles[target.value as keyof typeof devToggles] = true;
    props.dev.setDevToggles(devToggles);
    dispatch({
      type: ActionType.SELECT_CITY,
      payload: { id: null },
    });
    e.stopPropagation();
  };

  return (
    <>
      <div>
        Selected City: {gameState.selectedCityId ?? 'none'} <br />
        <form>
          {Object.keys(props.dev.devToggles).map((devToggle, i) => (
            <label key={`radio-element-${i}`}>
              <input
                type="radio"
                checked={props.dev.devToggles[devToggle]}
                onChange={handleChange}
                value={devToggle as string}
              />
              {devToggle
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())}
              <br />
            </label>
          ))}
        </form>
        <button onClick={save}>Save</button>
      </div>
    </>
  );
};

export default DevPanel;
