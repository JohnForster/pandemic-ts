import React from 'react'
import * as Styled from './styled'

interface CityProps {
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
}

const City: React.FC<CityProps> = (props: CityProps) => {
  return (
    <Styled.Container x={props.data.location.x} y={props.data.location.x}>
      <Styled.Name>{props.data.name}</Styled.Name>
      <Styled.Circle colour={props.data.colour}>
        <Styled.Infection x={props.infection}>{props.infection}</Styled.Infection>
      </Styled.Circle>
    </Styled.Container>
  )
}

export default City