import React, { useContext } from 'react';

import { Connection } from '../../../types/gameData';
import ClickHandlers from '../../contexts/clickHandler.context';

import * as Styled from './styled';

type ConnectionLayerProps = {
  connections: Connection[];
  getPath: (id: string) => { x: number; y: number };
};

const ConnectionLayer = (props: ConnectionLayerProps) => {
  const clickHandlers = useContext(ClickHandlers);
  return (
    <Styled.ConnectionLayer>
      {Object.values(props.connections).map(c => {
        const [from, to] = [c.fromId, c.toId].map(props.getPath);
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
  );
};

export default ConnectionLayer;
