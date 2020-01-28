import React, { MouseEvent } from 'react';
import * as Styled from './styled';
import Colours from '../../../enums/colours';

interface CityProps {
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
  selected: boolean;
  onSelect: () => void;
}

const City: React.FC<CityProps> = (props: CityProps) => {
  const handleClick = (e: React.MouseEvent) => {
    props.onSelect();
    e.stopPropagation();
  };
  const showPawn = props.data.id === 10;
  const isSelected = props.data.id === 32;

  return (
    <Styled.Container x={props.data.location.x} y={props.data.location.y} onClick={handleClick}>
      {showPawn && (
        <Styled.PawnContainer>
          <Styled.Pawn isSelected={true} src={`pawns/pawn_${0}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${1}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${2}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${3}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${4}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${5}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${6}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${7}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${8}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${9}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${10}.png`} />
          <Styled.Pawn isSelected={false} src={`pawns/pawn_${11}.png`} />
        </Styled.PawnContainer>
      )}
      <Styled.Name colour={props.data.colour}>{props.data.name}</Styled.Name>
      <Styled.Infection x={props.infection}>{props.infection}</Styled.Infection>
      <Styled.Circle colour={props.data.colour} isSelected={isSelected} />
    </Styled.Container>
  );
};

export default City;
