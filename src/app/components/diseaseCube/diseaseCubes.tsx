import React from 'react';
import { SingleCube } from './singleCube';
import CityColour from '../../../types/enums/cityColour';
import styled from 'styled-components';

type DiseaseCubesProps = {
  colour: CityColour;
  number: number;
};

const CubesContainer = styled.div`
  display: flex;
  margin-top: 0.4vw;
  width: 85px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DiseaseCubes = (props: DiseaseCubesProps) => {
  const cubes = Array(props.number)
    .fill('')
    .map((_, i) => i);
  return (
    <CubesContainer>
      {cubes.map((_, i) => (
        <SingleCube key={`cube-${i}`} colour={props.colour} />
      ))}
    </CubesContainer>
  );
};
