import React from 'react';
import * as Styled from './styled';
import { CityState, CityData } from '../../../types/gameData';

interface CityProps {
  state: CityState;
  data: CityData;
  isSelected: boolean;
  onSelect: (id: number) => unknown;
}

const City: React.FC<CityProps> = (props: CityProps) => {
  const handleClick = (e: React.MouseEvent): void => {
    props.onSelect(props.data.id);
    e.stopPropagation();
  };
  const showPawn = props.data.id === 10;
  const isSelected = props.data.id === 32;

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handleClick}
    >
      {showPawn && (
        <Styled.PawnContainer>
          <Styled.Pawn isSelected={true} src={`assets/pawns/pawn_${0}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${1}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${2}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${3}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${4}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${5}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${6}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${7}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${8}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${9}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${10}.png`} />
          <Styled.Pawn isSelected={false} src={`assets/pawns/pawn_${11}.png`} />
        </Styled.PawnContainer>
      )}
      <Styled.Name colour={props.data.colour}>{props.data.name}</Styled.Name>
      <Styled.Infection x={props.state.infection}>
        {props.state.infection}
      </Styled.Infection>
      <Styled.Circle colour={props.data.colour} isSelected={isSelected} />
    </Styled.Container>
  );
};

export default City;
