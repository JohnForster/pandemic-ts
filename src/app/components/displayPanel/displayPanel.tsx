import React from 'react';
import * as Styled from './styled';

interface DisplayPanelProps {
  side: 1 | 2;
  sideOne: React.ReactElement;
  sideTwo: React.ReactElement;
  bottom: React.ReactElement;
}

const DisplayPanel: React.FC<DisplayPanelProps> = (
  props: DisplayPanelProps,
) => {
  return (
    <div onClick={(e): void => e.stopPropagation()}>
      <Styled.Side isShowing={props.side === 1}>{props.sideOne}</Styled.Side>
      <Styled.Side isShowing={props.side === 2}>{props.sideTwo}</Styled.Side>
      {props.bottom}
    </div>
  );
};

export default DisplayPanel;
