import React from 'react';
import GameState, { BoardData } from '../../../types/gameData';
import copyStringToClipboard from '../../utils/copyStringToClipboard';

interface DevPanelProps {
  gameState: GameState;
  board: BoardData;
  dev: {
    selectedId: number | undefined;
  };
  toggleDev: () => void;
}

const DevPanel: React.FC<DevPanelProps> = (props: DevPanelProps) => {
  const save = (): void => {
    copyStringToClipboard(
      `module.exports = ${JSON.stringify(props.board, null, 2)}`,
    );
  };

  return (
    <>
      <button onClick={props.toggleDev}>Toggle dev mode</button>
      <br />
      Selected: {props.dev.selectedId ?? 'none'}
      <button onClick={save}>Save</button>
      <br />
    </>
  );
};

export default DevPanel;
