import React, { useContext } from 'react';

import { BoardData } from '../../../../types/gameData';
import ClickHandlers from '../../../contexts/clickHandler.context';

import styled, { css } from 'styled-components';

const ConnectionLayerSVG = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Connection = styled.line<{ dotted: boolean }>(
  ({ dotted }) => css`
    stroke: gold;
    border: 0.042vw solid black;
    z-index: 0.5;
    stroke-width: 0.13vw;
    stroke-dasharray: ${dotted ? '5,5' : ''};
  `,
);

type ConnectionLayerProps = {
  boardData: BoardData;
};

const ConnectionLayer = (props: ConnectionLayerProps) => {
  const clickHandlers = useContext(ClickHandlers);

  const connections = Object.values(props.boardData.connections);

  const getPath = (id: string): { x: number; y: number } => {
    return props.boardData.cities[id].location;
  };

  return (
    <ConnectionLayerSVG>
      {connections.map(c => {
        const [from, to] = [c.fromId, c.toId].map(getPath);
        return (
          <Connection
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
    </ConnectionLayerSVG>
  );
};

export default ConnectionLayer;
