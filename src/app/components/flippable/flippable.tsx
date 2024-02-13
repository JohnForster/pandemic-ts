import React, { ReactNodeArray } from 'react';
import * as Styled from './styled';

type FlippableProps = {
  children: ReactNodeArray;
  sideIndex: number;
};

export const Flippable = (props: FlippableProps) => {
  return (
    <Styled.Container>
      {props.children.map((node, i) => (
        <Styled.Side key={`flipside-${i}`} isShowing={i === props.sideIndex}>
          {node}
        </Styled.Side>
      ))}
    </Styled.Container>
  );
};
