import React from 'react';
import * as Styled from './styled';
import { CityState, CityData, Player } from '../../../types/gameData';

interface CityProps {
  state: CityState;
  data: CityData;
  isSelected: boolean;
  onSelect: (id: string) => unknown;
  handlePawnClick: (id: string) => void;
  incrementCity: (id: string) => void;
  decrementCity: (id: string) => void;
  players: Player[];
}

const City: React.FC<CityProps> = (props: CityProps) => {
  const handle = (fn: (id: string) => void) => (e: React.MouseEvent): void => {
    fn(props.data.id);
    e.stopPropagation();
  };

  const handlePawnClick = (id: string) => (e: React.MouseEvent): void => {
    props.handlePawnClick(id);
    e.stopPropagation();
  };

  const isSelected = props.data.id === '32';

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handle(props.onSelect)}
    >
      <Styled.PawnContainer>
        {props.players.map((p, i, { length }) => (
          <Styled.Pawn
            key={`pawn-${i}`}
            isSelected={p.id === '0'}
            src={`assets/pawns/pawn_${p.colour}.png`}
            n={length}
            onClick={handlePawnClick(p.id)}
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
          <Styled.CounterButton onClick={handle(props.decrementCity)}>
            <span>−</span>
          </Styled.CounterButton>
        )}
        {props.isSelected && (
          <Styled.CounterButton onClick={handle(props.incrementCity)}>
            <span>+</span>
          </Styled.CounterButton>
        )}
      </Styled.CounterContainer>
    </Styled.Container>
  );
};

export default City;
