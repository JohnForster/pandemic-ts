import React, { useContext, MouseEvent } from 'react';

import City from '../city/city';
import DevPanel from '../displayPanel/devPanel/devPanel';

import GameStateContext from '../../contexts/gameStateContext';

import { BoardData } from '../../../types/gameData';

import * as Styled from './styled';
import ClickHandlers from '../../contexts/clickHandler.context';
import DisplayPanel from '../displayPanel/displayPanel';
import PlayerPanel from '../displayPanel/playerPanel/playerPanel';
import CityColour from '../../../types/enums/cityColour';
import { ActionType } from '../../../types/actions';
import { WorldMap } from '../worldMap/worldMap';
import ConnectionLayer from './connectionLayer';

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
    const y = e.pageY / window.innerHeight;
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

  const cities = props.boardData.cities;
  const blacks = Object.values(cities).filter(
    c => c.colour === CityColour.Black,
  );
  const blues = Object.values(cities).filter(c => c.colour === CityColour.Blue);
  const yellows = Object.values(cities).filter(
    c => c.colour === CityColour.Yellow,
  );
  const reds = Object.values(cities).filter(c => c.colour === CityColour.Red);
  console.log({ blacks, blues, yellows, reds });

  return (
    <Styled.GameBoard onClick={handleClick}>
      {/* <Styled.WorldMap src="./assets/worldMap.png" /> */}
      {/* <img
        src={worldMap}
        alt="World Map"
        style={{
          background: '#13315C',
          height: 'auto',
          width: '100vw',
          marginTop: '-5%',
        }}
      /> */}
      <WorldMap>
        <ConnectionLayer
          connections={Object.values(props.boardData.connections)}
          getPath={getLocation}
        />
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
      </WorldMap>
      <Styled.VirusChartContainer>
        <Styled.Heading>Global Intensity</Styled.Heading>
        {[0, 1, 2, 3].map(n => (
          <Styled.VirusChart
            key={`virusChart-${n}`}
            progress={findTotal(n)}
            maxValue={24}
            dimension={120}
            color={n}
          />
        ))}
      </Styled.VirusChartContainer>
      <DisplayPanel
        side={gameState.devMode ? 1 : 2}
        sideOne={<DevPanel board={props.boardData} />}
        sideTwo={<PlayerPanel />}
        bottom={
          <button
            onClick={() =>
              dispatch({
                type: gameState.devMode
                  ? ActionType.DEV_MODE_OFF
                  : ActionType.DEV_MODE_ON,
              })
            }
          >
            {gameState.devMode ? 'Disable Dev Mode' : 'Enable Dev Mode'}
          </button>
        }
      />
    </Styled.GameBoard>
  );
};

export default GameBoard;
