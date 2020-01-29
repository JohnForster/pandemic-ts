import React, { MouseEvent } from 'react';

import City from '../city/city';

import * as Styled from './styled';
import GameState from '../../../types/gameData';

interface GameBoardProps {
  gameState: GameState;
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
    const MAP_IMAGE_HEIGHT_RATIO = 0.51375687843;
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / (window.innerWidth * MAP_IMAGE_HEIGHT_RATIO);
    props.dev.handleMapClick({ x, y });
  };

  return (
    <Styled.GameBoard onClick={handleClick}>
      <Styled.WorldMap src="./assets/worldMap.png" />
      {props.gameState.cities.map((city, i) => (
        <City
          key={`city-${i}`}
          state={city}
          isSelected={city.data.id === props.dev.selectedId}
          onSelect={props.dev.handleCityClick}
        />
      ))}
    </Styled.GameBoard>
  );
};

export default GameBoard;
