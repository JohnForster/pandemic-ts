import React, { useContext, MouseEvent } from 'react';

import City from '../city/city';

import * as Styled from './styled';
import { BoardData, Connection } from '../../../types/gameData';
import GameStateContext from '../../contexts/gameStateContext';

interface GameBoardProps {
  // gameState: GameState;
  boardData: BoardData;
  // ? Could probably be removed from dev?
  dev: {
    selectedId: number | undefined;
    setSelectedId: (id: number) => void;
    handleMapClick: ({ x, y }: { x: number; y: number }) => void;
    handleCityClick: (id: number) => void;
  };
}

const GameBoard: React.FC<GameBoardProps> = (props: GameBoardProps) => {
  const handleClick = (e: MouseEvent): void => {
    // ! Currently aspect ratio and path are hard-coded.
    const MAP_IMAGE_HEIGHT_RATIO = 0.51375687843;
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / (window.innerWidth * MAP_IMAGE_HEIGHT_RATIO);
    props.dev.handleMapClick({ x, y });
  };

  const getLocation = (id: number): { x: number; y: number } => {
    return props.boardData.cities[id].location;
  };

  const gameState = useContext(GameStateContext);
  const connection: Connection = { id: 0, fromId: 34, toId: 64 };

  return (
    <Styled.GameBoard onClick={handleClick}>
      <Styled.WorldMap src="./assets/worldMap.png" />
      <Styled.ConnectionLayer width="100px" height="100px">
        {props.boardData.connections.map((c, i) => {
          const [from, to] = [c.fromId, c.toId].map(getLocation);
          return (
            <Styled.Connection
              key={`connection-${i}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
            />
          );
        })}
      </Styled.ConnectionLayer>
      {props.boardData.cities.map((city, i) => (
        <City
          key={`city-${i}`}
          data={city}
          state={gameState.cities[city.id]}
          isSelected={city.id === props.dev.selectedId}
          onSelect={props.dev.handleCityClick}
        />
      ))}
    </Styled.GameBoard>
  );
};

export default GameBoard;
