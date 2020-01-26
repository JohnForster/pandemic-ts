import React from 'react';

import City from '../city/city'

import * as Styled from './styled';

interface GameBoardProps {
  gameData: {
    cities: {
      data: {
        name: string;
        location: {
          x: number;
          y: number;
        };
        connections: any[];
        colour: 'black' | 'blue' | 'red' | 'yellow';
      };
      infection: number;
    }[]
  }
}

const GameBoard: React.FC<GameBoardProps> = props => {
  return (
    <Styled.GameBoard>
      <Styled.WorldMap src='./worldMap.png' />
      {props.gameData.cities.map(city => (
        <City data={city.data} infection={city.infection}/>
      ))}
    </Styled.GameBoard>
  );
}

export default GameBoard;
