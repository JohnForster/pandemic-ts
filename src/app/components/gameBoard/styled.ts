import styled, { css } from 'styled-components';
import RadialBarChart from '../radialBarChart/radialBarChart';

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

export const VirusChart = styled(RadialBarChart)`
  height: 100%;
`;

export const VirusChartContainer = styled.div`
  width: 25.2vw;
  height: 5.25vw;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.84vw;
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 2.52vw;
  left: 60%;
`;

export const Heading = styled.h1`
  font-size: 1.5vw;
  color: white;
  position: absolute;
  margin: auto;
  top: -40%;
`;
