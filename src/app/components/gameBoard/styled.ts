import styled from 'styled-components';

export const GameBoard = styled.div`
  /* text-align: center; */
  background-color: darkGray;
  position: relative;
`;

export const WorldMap = styled.img`
  position: relative;
  width: 100%;
  filter: saturate(0.9);
`;

export const ConnectionLayer = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Connection = styled.line`
  stroke: gold;
  border: 1px solid black;
  z-index: 0.5;
  stroke-width: 3;
`;
