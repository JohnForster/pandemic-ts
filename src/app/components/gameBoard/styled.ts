import styled, { css } from 'styled-components';

export const GameBoard = styled.div`
  /* text-align: center; */
  background-color: darkGray;
  position: relative;
`;

export const WorldMap = styled.img`
  background: black;
  position: relative;
  width: 100%;
  filter: saturate(0.75) contrast(0.8);
`;

export const ConnectionLayer = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Connection = styled.line<{ dotted: boolean }>(
  ({ dotted }) => css`
    stroke: gold;
    border: 0.042vw solid black;
    z-index: 0.5;
    stroke-width: 0.13vw;
    stroke-dasharray: ${dotted ? '5,5' : ''};
  `,
);
