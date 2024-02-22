import React, { useContext } from 'react';
import * as Styled from './styled';
import { CityState, CityData, Player } from '../../../types/gameData';
import { ActionType } from '../../../types/actions';
import GameStateContext from '../../contexts/gameStateContext';
import { incrementCity, decrementCity } from '../../state/cities';
import { DiseaseCubes } from '../diseaseCube/diseaseCubes';

interface CityProps {
  state: CityState;
  data: CityData;
  isSelected: boolean;
  onSelect: (id: string) => unknown;
  players: Player[];
}
// TODO Extract Pawn into its own class
const City: React.FC<CityProps> = (props: CityProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);

  const handle = (fn: (id: string) => void) => (e: React.MouseEvent): void => {
    fn(props.data.id);
    e.stopPropagation();
  };

  const handlePawnClick = (id: string) => (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (id === gameState.selectedPawnId)
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    dispatch({ type: ActionType.SELECT_PAWN, payload: { id } });
  };

  const increment = (id: string): void => dispatch(incrementCity(id));

  const decrement = (id: string): void => dispatch(decrementCity(id));

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handle(props.onSelect)}
      id={props.data.name}
    >
      <Styled.PawnContainer>
        {props.players.map((p, i, { length }) => (
          <Styled.Pawn
            key={`pawn-${i}`}
            i={i}
            isCurrentTurn={p.id === gameState.currentPlayerId}
            isSelected={gameState.selectedPawnId === p.id}
            src={`assets/pawns/pawn_${p.colour}.png`}
            n={length}
            onClick={handlePawnClick(p.id)}
          />
        ))}
      </Styled.PawnContainer>
      <Styled.Circle
        infection={props.state.infection}
        colour={props.data.colour}
        isSelected={props.isSelected}
      />
      <Styled.Name colour={props.data.colour} x={props.state.infection}>
        {props.data.name}
      </Styled.Name>
      {/* <Styled.Infection x={props.state.infection}>
        {props.state.infection || 1}
      </Styled.Infection> */}
      <DiseaseCubes number={props.state.infection} colour={props.data.colour} />
      <Styled.CounterContainer>
        {props.isSelected && (
          <Styled.CounterButton onClick={handle(decrement)}>
            <span>−</span>
          </Styled.CounterButton>
        )}
        {props.isSelected && (
          <Styled.CounterButton onClick={handle(increment)}>
            <span>+</span>
          </Styled.CounterButton>
        )}
      </Styled.CounterContainer>
    </Styled.Container>
  );
};

export default City;
