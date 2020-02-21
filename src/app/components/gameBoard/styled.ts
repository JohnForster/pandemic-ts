import styled from 'styled-components';
import RadialBarChart from '../radialBarChart/radialBarChart';

export const GameBoard = styled.div`
  /* text-align: center; */
  background-color: darkGray;
  position: relative;
`;

export const WorldMap = styled.img`
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

export const Connection = styled.line`
  stroke: gold;
  border: 1px solid black;
  z-index: 0.5;
  stroke-width: 3;
`;

export const VirusChart = styled(RadialBarChart)``;

export const VirusChartContainer = styled.div`
  width: 600px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 60px;
  left: 60%;
`;

export const Heading = styled.h1`
  color: white;
  position: absolute;
  margin: auto;
  top: -40%;
`;
