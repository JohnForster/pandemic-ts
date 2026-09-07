import React from 'react';
import { CityState } from '../../../types/gameData';
import { SingleCube } from './singleCube';
import CityColour, { CITY_COLOURS } from '../../../types/enums/cityColour';
import styled from 'styled-components';

type DiseaseCubesProps = {
  infection: CityState['infection'];
  id: string;
  createDoubleClickHandler: (
    c: CityColour,
    id: string,
  ) => React.MouseEventHandler;
};

const CubesContainer = styled.div`
  display: flex;
`;

export const DiseaseCubes = (props: DiseaseCubesProps) => {
  return (
    <CubesContainer>
      {CITY_COLOURS.map(colour =>
        props.infection[colour] ? (
          <SingleCube
            key={colour}
            colour={colour}
            number={props.infection[colour]}
            handleDoubleClick={props.createDoubleClickHandler(colour, props.id)}
          />
        ) : null,
      )}
    </CubesContainer>
  );
};
