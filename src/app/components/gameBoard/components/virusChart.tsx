import styled from 'styled-components';
import React from 'react';

import GameState, { BoardData } from '../../../../types/gameData';
import CityColour from '../../../../types/enums/cityColour';
import RadialBarChart from '../../radialBarChart/radialBarChart';

const IntensityPanelContainer = styled.div`
  width: 25.2vw;
  height: 5.25vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.84vw;
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 2.52vw;
  left: 60%;
`;

const Heading = styled.h1`
  font-size: 1.5vw;
  color: white;
  position: absolute;
  margin: auto;
  top: -40%;
`;

const VirusChart = styled(RadialBarChart)`
  height: 100%;
`;

type IntensityPanelProps = {
  boardData: BoardData;
  gameState: GameState;
};

export const IntensityPanel = (props: IntensityPanelProps) => {
  const findTotal = (colour: CityColour): number => {
    const cityIds = Object.values(props.boardData.cities)
      .filter(c => c.colour === colour)
      .map(c => c.id);
    const cities = Object.values(props.gameState.cities).filter(c =>
      cityIds.includes(c.id),
    );
    let count = 0;
    cities.forEach(city => {
      count += city.infection;
    });
    return count;
  };

  return (
    <IntensityPanelContainer>
      <Heading>Global Intensity</Heading>
      {[0, 1, 2, 3].map(n => (
        <VirusChart
          key={`virusChart-${n}`}
          progress={findTotal(n)}
          maxValue={24}
          dimension={120}
          color={n}
        />
      ))}
    </IntensityPanelContainer>
  );
};
