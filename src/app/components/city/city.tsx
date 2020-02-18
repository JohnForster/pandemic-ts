import React from 'react';
import * as Styled from './styled';
import { CityState, CityData, Player } from '../../../types/gameData';

interface CityProps {
  state: CityState;
  data: CityData;
  isSelected: boolean;
  onSelect: (id: number) => unknown;
  handlePawnClick: (id: number) => void;
  players: Player[];
}

const City: React.FC<CityProps> = (props: CityProps) => {
  const handleClick = (e: React.MouseEvent): void => {
    props.onSelect(props.data.id);
    e.stopPropagation();
  };

  const isSelected = props.data.id === 32;

  // const players = Array(12).fill({});

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handleClick}
    >
      <Styled.PawnContainer>
        {props.players.map((p, i, { length }) => (
          <Styled.Pawn
            key={`pawn-${i}`}
            isSelected={p.id === 0}
            src={`assets/pawns/pawn_${p.colour}.png`}
            n={length}
            onClick={(): void => props.handlePawnClick(p.id)}
          />
        ))}
      </Styled.PawnContainer>
      <Styled.Circle colour={props.data.colour} isSelected={isSelected} />
      <Styled.Name colour={props.data.colour} x={props.state.infection}>
        {props.data.name}
      </Styled.Name>
      <Styled.Infection x={props.state.infection}>
        {props.state.infection}
      </Styled.Infection>
      <Styled.CounterContainer>
        {props.isSelected && (
          <Styled.CounterButton>
            <span>−</span>
          </Styled.CounterButton>
        )}
        {props.isSelected && (
          <Styled.CounterButton>
            <span>+</span>
          </Styled.CounterButton>
        )}
      </Styled.CounterContainer>
    </Styled.Container>
  );
};

export default City;
