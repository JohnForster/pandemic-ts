import React, { MouseEvent } from 'react';

import City from '../city/city'

import * as Styled from './styled';
import Colours from '../../../enums/colours';

interface GameBoardProps {
  gameData: {
    cities: {
      data: {
        id: number;
        name: string;
        location: {
          x: number;
          y: number;
        };
        connections: any[];
        colour: Colours;
      };
      infection: number;
    }[]
  };
  dev: {
    selectedId: number | undefined;
    setSelectedId: (id: number) => void;
    changeLocation: (id: number, {x, y}: {x: number, y: number}) => void;
    changeColour: (id: number) => void;
  };
}

const GameBoard: React.FC<GameBoardProps> = props => {
  const handleClick = (e: MouseEvent) => {
    if(!props.dev.selectedId) return
    const x = Math.round(e.pageX / window.innerWidth * 1000) / 10
    const y = Math.round(e.pageY / (window.innerWidth * 0.51375687843) * 1000) / 10
    props.dev.changeLocation(props.dev.selectedId, {x, y})
    console.log(x, y)
  }

  return (
    <Styled.GameBoard onClick={handleClick}>
      <Styled.WorldMap src='./worldMap.png' />
      {props.gameData.cities.map((city, i) => (
        <City
          key={`city-${i}`}
          data={city.data}
          infection={city.infection}
          selected={city.data.id === props.dev.selectedId}
          onSelect={() => props.dev.setSelectedId(city.data.id)}
        />
      ))}
    </Styled.GameBoard>
  );
}

export default GameBoard;
