import React, { useContext, MouseEvent } from 'react';

import City from '../city/city';
import DevPanel from '../devPanel/devPanel';

import GameStateContext from '../../contexts/gameStateContext';

import { BoardData } from '../../../types/gameData';

import * as Styled from './styled';
import ClickHandlers from '../../contexts/clickHandler.context';
import DisplayPanel from '../displayPanel/displayPanel';
import PlayerPanel from '../playerPanel/playerPanel';
import CityColour from '../../../types/enums/cityColour';
import { ActionType } from '../../../types/actions';

interface GameBoardProps {
  boardData: BoardData;
}

const GameBoard: React.FC<GameBoardProps> = (props: GameBoardProps) => {
  const [gameState, dispatch] = useContext(GameStateContext);
  const clickHandlers = useContext(ClickHandlers);

  const handleClick = (e: MouseEvent): void => {
    // ! Currently aspect ratio and path are hard-coded.
    const MAP_IMAGE_HEIGHT_RATIO = 0.51375687843;
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / (window.innerWidth * MAP_IMAGE_HEIGHT_RATIO);
    clickHandlers.handleMapClick({ x, y });
  };

  const getLocation = (id: string): { x: number; y: number } => {
    return props.boardData.cities[id].location;
  };

  const findTotal = (colour: CityColour): number => {
    const cityIds = Object.values(props.boardData.cities)
      .filter(c => c.colour === colour)
      .map(c => c.id);
    const cities = Object.values(gameState.cities).filter(c =>
      cityIds.includes(c.id),
    );
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
        {[0, 1, 2, 3].map(n => (
          <Styled.VirusChart
            key={`virusChart-${n}`}
            progress={findTotal(n)}
            maxValue={48}
            dimension={120}
            color={n}
          />
        ))}
      </Styled.VirusChartContainer>
      <Styled.ConnectionLayer width="100px" height="100px">
        {Object.values(props.boardData.connections).map(c => {
          const [from, to] = [c.fromId, c.toId].map(getLocation);
          return (
            <Styled.Connection
              key={`connection-${c.id}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              dotted={c.dotted}
              onClick={(): void => clickHandlers.handleRouteClick(c.id)}
            />
          );
        })}
      </Styled.ConnectionLayer>
      {Object.values(props.boardData.cities)
        .filter(c => !c.hidden)
        .map(city => (
          <City
            key={`city-${city.id}`}
            data={city}
            state={gameState.cities[city.id]}
            isSelected={city.id === gameState.selectedCityId}
            onSelect={clickHandlers.handleCityClick}
            players={Object.values(gameState.players).filter(
              p => p.locationId === city.id,
            )}
          />
        ))}
      <DisplayPanel
        side={gameState.devMode ? 1 : 2}
        sideOne={<DevPanel board={props.boardData} />}
        sideTwo={<PlayerPanel />}
        bottom={
          <button
            onClick={(): void => dispatch({ type: ActionType.TOGGLE_DEV })}
          >
            {`Dev mode: ${gameState.devMode ? 'ON' : 'OFF'}`}
          </button>
        }
      />
    </Styled.GameBoard>
  );
};

export default GameBoard;
