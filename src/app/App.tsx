import React, { useState } from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import countryData from '../countryData';

import * as Styled from './styled';
import Colours from '../enums/colours';

import cloneDeep from 'lodash.clonedeep';
import enableChangeLocation from '../tools/enableChangeLocation';

// ! USE REACT CONTEXT FOR DEV STUFF

function copyStringToClipboard(str: string) {
  // Create new element
  const el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

const initialTestData = {
  cities: countryData.map(c => ({
    data: {
      ...c,
    },
    infection: c.id % 4,
  })),
};

const App: React.FC = () => {
  const [gameData, setGameData] = useState(initialTestData);
  const [isDev, setDev] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();

  const changeLocation = (id: number, { x, y }: { x: number; y: number }) => {
    const cities = cloneDeep(gameData.cities);
    const city = cities.find(c => c.data.id === id);
    if (!city) return console.error('No city found with id', id);
    city.data.location = { x, y };
    const newGameData = { ...gameData, cities };
    setGameData(newGameData);
    console.log(JSON.stringify(newGameData.cities.map(c => c.data)));
  };

  const changeColour = (id: number) => {
    const cities = cloneDeep(gameData.cities);
    const city = cities.find(c => c.data.id === id);
    if (!city) return console.error('No city found with id', id);
    city.data.colour = (city.data.colour + 1) % 4;
    const newGameData = { ...gameData, cities };
    setGameData(newGameData);
    console.log(JSON.stringify(newGameData.cities.map(c => c.data)));
  };

  const dev = {
    selectedId,
    setSelectedId,
    changeLocation,
    changeColour,
  };

  const save = () => {
    copyStringToClipboard(
      `module.exports = ${JSON.stringify(
        gameData.cities.map(c => c.data),
        null,
        2,
      )}`,
    );
  };

  const toggleDev = () => {
    setSelectedId(isDev ? undefined : 0);
    setDev(!isDev);
  };

  return (
    <Styled.App>
      <GameBoard gameData={gameData} dev={dev} />
      <button onClick={toggleDev}>Toggle dev mode</button>
      <br />
      Dev mode: {isDev ? 'ON ' : 'OFF'}
      <br />
      Selected: {dev.selectedId ?? 'none'}
      <button onClick={save}>Save</button>
      <br />
      {Array(8)
        .fill(null)
        .map((x, i) => (
          <Styled.Pawn key={`pawn${i}`} src={`pawns/pawn_${i}.png`} />
        ))}
      <br />
      {Array(8)
        .fill(null)
        .map((x, i) => (
          <Styled.Pawn key={`pawn${i + 8}`} src={`pawns/pawn_${i + 8}.png`} />
        ))}
    </Styled.App>
  );
};

export default App;
