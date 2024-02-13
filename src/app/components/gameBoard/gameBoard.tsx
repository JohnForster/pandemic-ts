import React, { useContext, MouseEvent } from 'react';

import DevPanel from '../displayPanel/devPanel/devPanel';
import GameStateContext from '../../contexts/gameStateContext';
import { BoardData } from '../../../types/gameData';
import ClickHandlers from '../../contexts/clickHandler.context';
import DisplayPanel from '../displayPanel/displayPanel';
import PlayerPanel from '../displayPanel/playerPanel/playerPanel';
import { ActionType } from '../../../types/actions';
import { WorldMap } from '../worldMap/worldMap';
import ConnectionLayer from './components/connectionLayer';
import { CitiesLayer } from './components/citiesLayer';
import { IntensityPanel } from './components/virusChart';

import * as Styled from './styled';

interface GameBoardProps {
  boardData: BoardData;
}

const GameBoard: React.FC<GameBoardProps> = (props: GameBoardProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const clickHandlers = useContext(ClickHandlers);

  const handleClick = (e: MouseEvent): void => {
    // ! Currently aspect ratio and path are hard-coded.
    // const MAP_IMAGE_HEIGHT_RATIO = 0.51375687843;
    // TODO Should probably use `clientX` and target.getBoundingClientRect();
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / window.innerHeight;
    clickHandlers.handleMapClick({ x, y });
  };

  return (
    <Styled.GameBoard onClick={handleClick}>
      <WorldMap>
        <ConnectionLayer boardData={props.boardData} />
        <CitiesLayer boardData={props.boardData} gameState={gameState} />
      </WorldMap>
      <IntensityPanel boardData={props.boardData} gameState={gameState} />
      <DisplayPanel
        side={gameState.devMode ? 1 : 2}
        sideOne={<DevPanel board={props.boardData} />}
        sideTwo={<PlayerPanel />}
        bottom={
          <button
            onClick={() =>
              dispatch({
                type: gameState.devMode
                  ? ActionType.DEV_MODE_OFF
                  : ActionType.DEV_MODE_ON,
              })
            }
          >
            {gameState.devMode ? 'Disable Dev Mode' : 'Enable Dev Mode'}
          </button>
        }
      />
    </Styled.GameBoard>
  );
};

export default GameBoard;
