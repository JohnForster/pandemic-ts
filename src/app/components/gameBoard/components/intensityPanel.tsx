import styled from 'styled-components';
import React from 'react';

import GameState, { BoardData } from '../../../../types/gameData';
import CityColour from '../../../../types/enums/cityColour';
import RadialBarChart from '../../radialBarChart/radialBarChart';
import { NewsModal } from '../../newsModal/newsModal';

const IntensityPanelContainer = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 60%;
`;

const ChartContainer = styled.div`
  width: 25.2vw;
  height: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

type IntensityPanelProps = {
  boardData: BoardData;
  gameState: GameState;
};

export const IntensityPanel = (props: IntensityPanelProps) => {
  const findTotal = (colour: CityColour): number => {
    const cities = Object.values(props.gameState.cities);
    let count = 0;
    cities.forEach(city => {
      count += city.infection[colour];
    });
    return count;
  };

  const cityColours: CityColour[] = ['blue', 'yellow', 'black', 'red'];

  return (
    <IntensityPanelContainer>
      <NewsModal title="Global Intensity">
        <ChartContainer>
          {cityColours.map(c => (
            <RadialBarChart
              key={`virusChart-${c}`}
              progress={findTotal(c)}
              maxValue={24}
              dimension={120}
              color={c}
            />
          ))}
        </ChartContainer>
      </NewsModal>
    </IntensityPanelContainer>
  );
};
