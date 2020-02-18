import React, { useContext, MouseEvent } from 'react';

import City from '../city/city';
import DevPanel from '../devPanel/devPanel';

import GameStateContext from '../../contexts/gameStateContext';

import { BoardData } from '../../../types/gameData';

import * as Styled from './styled';
import ClickHandlers from '../../contexts/clickHandler.context';
import DisplayPanel from '../displayPanel/displayPanel';
import PlayerPanel from '../playerPanel/playerPanel';
import RadialBarChart from '../radialBarChart/radialBarChart';
import CityColour from '../../../types/enums/cityColour';
interface GameBoardProps {
  // gameState: GameState;
  boardData: BoardData;
  // ? Could probably be removed from dev?
  dev: {
    selectedId: number | undefined;
    setSelectedId: (id: number) => void;
    isDev: boolean;
    toggleDev: () => void;
    devToggles: {
      changeLocation: boolean;
      changeColour: boolean;
      createRoutes: boolean;
      removeRoutes: boolean;
    };
    setDevToggles: (devToggles: {
      changeLocation: boolean;
      changeColour: boolean;
      createRoutes: boolean;
      removeRoutes: boolean;
    }) => void;
    // handleMapClick: ({ x, y }: { x: number; y: number }) => void;
    // handleCityClick: (id: number) => void;
    // handleRouteClick: (id: number) => void;
    // handlePawnClick: (id: number) => void;
  };
}

const GameBoard: React.FC<GameBoardProps> = (props: GameBoardProps) => {
  const gameState = useContext(GameStateContext);
  const clickHandlers = useContext(ClickHandlers);

  const handleClick = (e: MouseEvent): void => {
    // ! Currently aspect ratio and path are hard-coded.
    const MAP_IMAGE_HEIGHT_RATIO = 0.51375687843;
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / (window.innerWidth * MAP_IMAGE_HEIGHT_RATIO);
    clickHandlers.handleMapClick({ x, y });
  };

  const getLocation = (id: number): { x: number; y: number } => {
    return props.boardData.cities[id].location;
  };

  const findTotal = (colour: CityColour): number => {
    const cityIds = props.boardData.cities
      .filter(c => c.colour === colour)
      .map(c => c.id);
    const cities = gameState.cities.filter((c, i) => cityIds.includes(i));
    let count = 0;
    cities.forEach(city => {
      count += city.infection;
    });
    return count;
  };

  return (
    <Styled.GameBoard onClick={handleClick}>
      <Styled.WorldMap src="./assets/worldMap.png" />
      <Styled.VirusChartContainer>
        <Styled.Heading>Global Intensity</Styled.Heading>
        <Styled.VirusChart
          progress={findTotal(CityColour.Blue)}
          maxValue={48}
          dimension={120}
          color={CityColour.Blue}
        />
        <Styled.VirusChart
          progress={findTotal(CityColour.Yellow)}
          maxValue={48}
          dimension={120}
          color={CityColour.Yellow}
        />
        <Styled.VirusChart
          progress={findTotal(CityColour.Black)}
          maxValue={48}
          dimension={120}
          color={CityColour.Black}
        />
        <Styled.VirusChart
          progress={findTotal(CityColour.Red)}
          maxValue={48}
          dimension={120}
          color={CityColour.Red}
        />
      </Styled.VirusChartContainer>
      <Styled.ConnectionLayer width="100px" height="100px">
        {props.boardData.connections.map((c, i) => {
          const [from, to] = [c.fromId, c.toId].map(getLocation);
          return (
            <Styled.Connection
              key={`connection-${i}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              onClick={(): void => clickHandlers.handleRouteClick(c.id)}
            />
          );
        })}
      </Styled.ConnectionLayer>
      {props.boardData.cities.map((city, i) => (
        <City
          key={`city-${i}`}
          data={city}
          state={gameState.cities[city.id]}
          isSelected={city.id === props.dev.selectedId}
          onSelect={clickHandlers.handleCityClick}
          players={gameState.players.filter(p => p.locationId === city.id)}
          handlePawnClick={clickHandlers.handlePawnClick}
          incrementCity={clickHandlers.incrementCity}
          decrementCity={clickHandlers.decrementCity}
        />
      ))}
      <DisplayPanel
        side={props.dev.isDev ? 1 : 2}
        sideOne={
          <DevPanel
            gameState={gameState}
            board={props.boardData}
            dev={props.dev}
          />
        }
        sideTwo={<PlayerPanel />}
        bottom={
          <button onClick={props.dev.toggleDev}>
            {`Dev mode: ${props.dev.isDev ? 'ON' : 'OFF'}`}
          </button>
        }
      />
    </Styled.GameBoard>
  );
};

export default GameBoard;
