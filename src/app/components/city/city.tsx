import React, { useContext } from 'react';
import * as Styled from './styled';
import GameState, {
  CityState,
  CityData,
  Player,
} from '../../../types/gameData';
import { ActionType } from '../../../types/actions';
import GameStateContext from '../../contexts/gameStateContext';
import { infectCity, treatCity } from '../../state/cities';
import CityColour from '../../../types/enums/cityColour';
import { Pawns } from './components/pawns';
import { NewDiseaseCubes } from '../diseaseCube/newDiseaseCubes';
import { boardData } from '../../../data/boardData';

interface CityProps {
  cityState: CityState;
  data: CityData;
  isSelected: boolean;
  onSelect: (id: string, meta: boolean) => unknown;
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

  const handleClick = (id: string) => (evt: React.MouseEvent) => {
    props.onSelect(id, evt.metaKey);
    evt.stopPropagation();
  };

  const handlePawnClick = (id: string) => (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (id === gameState.selectedPawnId)
      return dispatch({ type: ActionType.SELECT_PAWN, payload: { id: null } });
    dispatch({ type: ActionType.SELECT_PAWN, payload: { id } });
  };

  const infect = (id: string, colour: CityColour): void =>
    dispatch(infectCity(id, colour));

  const treat = (id: string, colour: CityColour): void =>
    dispatch(treatCity(id, colour));

  const isProtected = cityIsProtected(gameState, props.data.id);

  const handleDoubleClick = (evt: React.MouseEvent) => {
    if (isProtected) return;
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
      $x={props.data.location.x}
      $y={props.data.location.y}
      onClick={handleClick(props.cityState.id)}
      id={props.data.name}
    >
      <Styled.Circle
        $infection={props.cityState.infection[props.data.colour]}
        $colour={props.data.colour}
        $isSelected={props.isSelected}
        onDoubleClick={handleDoubleClick}
        $isResearchStation={props.cityState.researchStation}
        $isProtected={isProtected}
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
      {/* <Styled.Infection x={props.state.infection}>
        {props.state.infection || 1}
      </Styled.Infection> */}
      {/* <DiseaseCubes
        number={props.cityState.infection[props.data.colour]}
        colour={props.data.colour}
      /> */}
      <NewDiseaseCubes
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

export default City;

const cityIsProtected = (gameState: GameState, cityId: string) => {
  const QUARANTINE_SPECIALIST_ID = 17;
  const quarantinePlayer = Object.values(gameState.players).find(
    p => p.colour === QUARANTINE_SPECIALIST_ID,
  );
  const quarantineCityId = quarantinePlayer.locationId;

  const protectedCityIds = [quarantineCityId];
  for (const connection of Object.values(boardData.connections)) {
    if (connection.fromId === quarantineCityId) {
      protectedCityIds.push(connection.toId);
    }
    if (connection.toId === quarantineCityId) {
      protectedCityIds.push(connection.fromId);
    }
  }
  // TODO HANDLE OFF-BOARD CONNECTIONS
  const connectedCities = protectedCityIds.map(id => boardData.cities[id]);
  return connectedCities.some(c => c.id === cityId);
};
