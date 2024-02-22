import React, { Fragment, useContext } from 'react';

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

type Point = {
  x: number;
  y: number;
};

type ConnectionProps = {
  from: Point;
  to: Point;
  dotted: boolean;
  handleClick: () => void;
};

const FILTER_ID = 'connectionBlur';

export const Connection = (props: ConnectionProps) => {
  // Add Component Logic Here
  return (
    <>
      <ConnectionBlur
        x1={`${props.from.x}%`}
        y1={`${props.from.y}%`}
        x2={`${props.to.x}%`}
        y2={`${props.to.y}%`}
        onClick={props.handleClick}
        filter={`url(#${FILTER_ID})`}
      />
      <ConnectionLine
        x1={`${props.from.x}%`}
        y1={`${props.from.y}%`}
        x2={`${props.to.x}%`}
        y2={`${props.to.y}%`}
        dotted={props.dotted}
      />
    </>
  );
};

const ConnectionLine = styled.line<{ dotted: boolean }>(
  ({ dotted }) => css`
    stroke: white;
    border: 0.042vw solid black;
    z-index: 0.5;
    stroke-width: 1px;
    stroke-dasharray: ${dotted ? '5,5' : ''};
  `,
);

const ConnectionBlur = styled.line`
  stroke: #f0c987;
  border: 0.042vw solid black;
  z-index: 0.5;
  stroke-width: 0.13vw;
`;

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
      <filter id={FILTER_ID} filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      {connections.map(c => {
        const [from, to] = [c.fromId, c.toId].map(getPath);
        return (
          <Connection
            key={`connection-${c.id}`}
            from={from}
            to={to}
            handleClick={() => clickHandlers.handleRouteClick(c.id)}
            dotted={c.dotted}
          />
          // <Connection
          //   key={`connection-${c.id}`}
          //   x1={`${from.x}%`}
          //   y1={`${from.y}%`}
          //   x2={`${to.x}%`}
          //   y2={`${to.y}%`}
          //   dotted={c.dotted}
          //   onClick={(): void => clickHandlers.handleRouteClick(c.id)}
          //   filter={`url(#${filterId})`}
          // />
        );
      })}
    </ConnectionLayerSVG>
  );
};

export default ConnectionLayer;
