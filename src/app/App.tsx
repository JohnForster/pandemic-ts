import React, {useState} from 'react';

import GameBoard from './components/gameBoard/gameBoard';

import * as Styled from './styled'

const App: React.FC = () => {
  const gameData = {
    cities: [
      {
        data: {
          "name": "London",
          "id": 0,
          "location": {
            "x": 10,
            "y": 10
          },
          "connections": [],
          "colour": 'red' as 'red'
        },
        infection: 0,
      }
    ]
  }

  return (
    <Styled.App>
      <GameBoard gameData={gameData}/>
    </Styled.App>
  );
}

export default App;
