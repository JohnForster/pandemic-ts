import React, { useContext } from 'react';
import * as Styled from './styled';
import { CityState, CityData, Player } from '../../../types/gameData';
import { ActionType } from '../../../types/actions';
import GameStateContext from '../../contexts/gameStateContext';
import { infectCity, treatCity } from '../../state/cities';
import { DiseaseCubes } from '../diseaseCube/diseaseCubes';
import CityColour from '../../../types/enums/cityColour';
import { Pawns } from './components/pawns';

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

  const handle = (fn: (id: string, colour: CityColour) => void) => (
    e: React.MouseEvent,
  ): void => {
    fn(props.data.id, props.data.colour);
    e.stopPropagation();
  };

  const handlePawnClick = (id: string) => (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (id === gameState.selectedPawnId)
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    dispatch({ type: ActionType.SELECT_PAWN, payload: { id } });
  };

  const handleCircleClick = (evt: React.MouseEvent) => {
    if (evt.altKey) {
      treat(props.data.id, props.data.colour);
      evt.stopPropagation();
    }
  };

  const infect = (id: string, colour: CityColour): void =>
    dispatch(infectCity(id, colour));

  const treat = (id: string, colour: CityColour): void =>
    dispatch(treatCity(id, colour));

  return (
    <Styled.Container
      x={props.data.location.x}
      y={props.data.location.y}
      onClick={handle(props.onSelect)}
      id={props.data.name}
    >
      <Styled.Circle
        infection={props.state.infection[props.data.colour]}
        colour={props.data.colour}
        isSelected={props.isSelected}
        onDoubleClick={handle(infect)}
        onClick={handleCircleClick}
      />
      <Pawns
        gameState={gameState}
        players={props.players}
        handlePawnClick={handlePawnClick}
      />
      <Styled.Name
        colour={props.data.colour}
        x={props.state.infection[props.data.colour]}
      >
        {props.data.name}
      </Styled.Name>
      {/* <Styled.Infection x={props.state.infection}>
        {props.state.infection || 1}
      </Styled.Infection> */}
      {/* <DiseaseCubes
        number={props.state.infection[props.data.colour]}
        colour={props.data.colour}
      /> */}
      <Styled.CounterContainer>
        {props.isSelected && (
          <Styled.CounterButton onClick={handle(treat)}>
            <span>−</span>
          </Styled.CounterButton>
        )}
        {props.isSelected && (
          <Styled.CounterButton onClick={handle(infect)}>
            <span>+</span>
          </Styled.CounterButton>
        )}
      </Styled.CounterContainer>
    </Styled.Container>
  );
};

export default City;
