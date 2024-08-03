import styled from 'styled-components';
import React, { useContext } from 'react';

import GameState, { BoardData } from '../../../../types/gameData';
import CityColour from '../../../../types/enums/cityColour';
import RadialBarChart from '../../radialBarChart/radialBarChart';
import { NewsModal } from '../../newsModal/newsModal';
import ClickHandlers from '../../../contexts/clickHandler.context';

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
  const { handleSelectedColourChange } = useContext(ClickHandlers);
  const findTotal = (colour: CityColour): number => {
    const cities = Object.values(props.gameState.cities);
    let count = 0;
    cities.forEach(city => {
      count += city.infection[colour];
    });
    return count;
  };

  const cityColours: CityColour[] = ['blue', 'yellow', 'black', 'red'];

  const createHandler = (colour: CityColour) => (evt: React.MouseEvent) => {
    handleSelectedColourChange(colour);
  };

  return (
    <IntensityPanelContainer>
      <NewsModal title="Global Intensity">
        <ChartContainer>
          {cityColours.map(c => (
            <div style={{ height: '100%' }} onClick={createHandler(c)}>
              <RadialBarChart
                key={`virusChart-${c}`}
                progress={findTotal(c)}
                maxValue={24}
                dimension={120}
                color={c}
                selected={props.gameState.selectedInfectionColour === c}
              />
            </div>
          ))}
        </ChartContainer>
      </NewsModal>
    </IntensityPanelContainer>
  );
};
