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

  const players = Array(5).fill({});

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handleClick}
    >
      {showPawn && (
        <Styled.PawnContainer>
          {players.map((p, i, { length: m }) => (
            <Styled.Pawn
              key={`pawn-${i}`}
              isSelected={i === 0}
              src={`assets/pawns/pawn_${i}.png`}
              n={m}
            />
          ))}
        </Styled.PawnContainer>
      )}
      <Styled.Name colour={props.data.colour}>{props.data.name}</Styled.Name>
      <Styled.Circle colour={props.data.colour} isSelected={isSelected} />
      <Styled.Infection x={props.state.infection}>
        {props.state.infection}
      </Styled.Infection>
    </Styled.Container>
  );
};

export default City;
