import React, { useContext, MouseEvent } from 'react';

import GameStateContext from '../../contexts/gameStateContext';
import { BoardData } from '../../../types/gameData';
import ClickHandlers from '../../contexts/clickHandler.context';
import { WorldMap } from '../worldMap/worldMap';
import ConnectionLayer from './components/connectionLayer';
import { CitiesLayer } from './components/citiesLayer';
import { IntensityPanel } from './components/intensityPanel';
import { NewDisplayPanel } from '../displayPanel/displayPanel';

import * as Styled from './styled';

interface GameBoardProps {
  boardData: BoardData;
}

const GameBoard: React.FC<GameBoardProps> = (props: GameBoardProps) => {
  const [gameState] = useContext(GameStateContext);
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
      <NewDisplayPanel boardData={props.boardData} gameState={gameState} />
      <IntensityPanel boardData={props.boardData} gameState={gameState} />
    </Styled.GameBoard>
  );
};

export default GameBoard;
