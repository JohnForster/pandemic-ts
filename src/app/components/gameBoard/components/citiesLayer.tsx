import React, { useContext, useMemo } from 'react';
import ClickHandlers from '../../../contexts/clickHandler.context';
import GameState, { BoardData } from '../../../../types/gameData';
import { City } from '../../city/city';
import { getProtectedCityIds } from '../../../helpers/getProtectedCityIds';

type CitiesLayerProps = {
  boardData: BoardData;
  gameState: GameState;
};

export const CitiesLayer = (props: CitiesLayerProps) => {
  const clickHandlers = useContext(ClickHandlers);
  const cities = Object.values(props.boardData.cities).filter(c => !c.hidden);
  const protectedCityIds = useMemo(
    () => getProtectedCityIds(props.gameState.players, props.boardData),
    [props.gameState.players, props.boardData],
  );

  return (
    <>
      {cities.map(city => (
        <City
          key={`city-${city.id}`}
          data={city}
          cityState={props.gameState.cities[city.id]}
          isSelected={city.id === props.gameState.selectedCityId}
          onSelect={clickHandlers.handleCityClick}
          isProtected={protectedCityIds.has(city.id)}
          players={Object.values(props.gameState.players).filter(
            p => p.locationId === city.id,
          )}
        />
      ))}
    </>
  );
};
