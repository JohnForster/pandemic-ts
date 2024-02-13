import React from 'react';

import GameState, { BoardData } from '../../../types/gameData';
import { Flippable } from '../flippable/flippable';
import DevPanel from './devPanel/devPanel';
import PlayerPanel from './playerPanel/playerPanel';
import { NewsModal } from '../newsModal/newsModal';

import * as Styled from './styled';

type NewDisplayPanelProps = {
  gameState: GameState;
  boardData: BoardData;
};

export const NewDisplayPanel = (props: NewDisplayPanelProps) => {
  const side = props.gameState.devMode ? 1 : 0;

  return (
    <Styled.Container>
      <Flippable sideIndex={side}>
        <NewsModal title="Players">
          <PlayerPanel />
        </NewsModal>
        <NewsModal title="Dev Options">
          <DevPanel board={props.boardData} />
        </NewsModal>
      </Flippable>
    </Styled.Container>
  );
};
