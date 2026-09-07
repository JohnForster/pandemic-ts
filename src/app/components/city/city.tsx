import React, { useContext } from 'react';
import * as Styled from './styled';
import { CityState, CityData, Player } from '../../../types/gameData';
import GameStateContext from '../../contexts/gameStateContext';
import { infectCity, treatCity } from '../../state/cities';
import CityColour from '../../../types/enums/cityColour';
import { Pawns } from './components/pawns';
import { DiseaseCubes } from '../diseaseCube/diseaseCubes';
import { usePawnClick } from '../../hooks/usePawnClick';

interface CityProps {
  cityState: CityState;
  data: CityData;
  isSelected: boolean;
  isProtected: boolean;
  onSelect: (id: string, meta: boolean) => unknown;
  players: Player[];
}
// TODO Extract Pawn into its own class
export const City: React.FC<CityProps> = (props: CityProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);

  const handle = (fn: (id: string, colour: CityColour) => void) => (
    e: React.MouseEvent,
  ): void => {
    fn(props.data.id, props.data.colour);
    e.stopPropagation();
  };

  const handleClick = (id: string) => (evt: React.MouseEvent) => {
    props.onSelect(id, evt.metaKey);
    evt.stopPropagation();
  };

  const handlePawnClick = usePawnClick();

  const infect = (id: string, colour: CityColour): void =>
    dispatch(infectCity(id, colour));

  const treat = (id: string, colour: CityColour): void =>
    dispatch(treatCity(id, colour));

  const handleDoubleClick = (evt: React.MouseEvent) => {
    if (props.isProtected) return;
    const colour = evt.altKey
      ? gameState.selectedInfectionColour
      : props.data.colour;
    dispatch(infectCity(props.data.id, colour));
  };

  const createCubeDoubleClickHandler = (colour: CityColour, id: string) => () => {
    dispatch(treatCity(id, colour));
  };

  return (
    <Styled.Container
      data-testid={`city-container-${props.data.id}`}
      $x={props.data.location.x}
      $y={props.data.location.y}
      onClick={handleClick(props.cityState.id)}
      id={props.data.name}
    >
      <Styled.Circle
        data-testid={`city-circle-${props.data.id}`}
        $infection={props.cityState.infection[props.data.colour]}
        $colour={props.data.colour}
        $isSelected={props.isSelected}
        onDoubleClick={handleDoubleClick}
        $isResearchStation={props.cityState.researchStation}
        $isProtected={props.isProtected}
      />
      <Pawns
        gameState={gameState}
        players={props.players}
        handlePawnClick={handlePawnClick}
      />
      <Styled.Name
        $colour={props.data.colour}
        $x={props.cityState.infection[props.data.colour]}
      >
        {props.data.name}
      </Styled.Name>
      <DiseaseCubes
        id={props.data.id}
        infection={props.cityState.infection}
        createDoubleClickHandler={createCubeDoubleClickHandler}
      />
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
