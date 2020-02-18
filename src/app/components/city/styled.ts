import styled from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';

const $yellow = '#F5D547';
const $black = '#3C3C3B';
const $blue = '#5867e9';
const $red = '#DB3069';

const $circleSize = 25;

interface ContainerProps {
  x: number;
  y: number;
}

export const Container = styled.div`
  z-index: ${({ y }: ContainerProps): number => Math.round(100 + y)};
  position: absolute;
  top: ${({ y }: ContainerProps): number => y}%;
  left: ${({ x }: ContainerProps): number => x}%;
  color: white;
  transform: translate(0, -${$circleSize / 2 + 1}px);
  text-shadow: 0px 0px 8px black, 1px 1px 1px black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 0;
  width: 0;
`;
interface NameProps {
  colour: CityColour;
  x: number;
}

export const Name = styled.div`
  white-space: nowrap;
  pointer-events: none;
  font-size: 1.1rem;

  z-index: 20;
  
   color: ${({ x }: NameProps): string =>
     x === 2 ? 'orange' : x === 3 ? 'red' : 'white'};
  /* color: ${({ colour }: NameProps): string =>
    colour === CityColour.Yellow
      ? lighten(0.3, $yellow)
      : colour === CityColour.Black
      ? lighten(0.65, $black)
      : colour === CityColour.Blue
      ? lighten(0.3, $blue)
      : colour === CityColour.Red
      ? lighten(0.4, $red)
      : ''}; */

`;

interface InfectionProps {
  x: number;
}

export const Infection = styled.div`
  font-family: Impact, Charcoal, sans-serif;
  font-weight: none;

  line-height: 19px;
  pointer-events: none;
  z-index: 2;
  font-size: ${({ x }: InfectionProps): string =>
    x === 0
      ? '0px'
      : x === 1
      ? '16px'
      : x === 2
      ? '20px'
      : x === 3
      ? '24px'
      : ''};

  color: ${({ x }: InfectionProps): string =>
    x === 2 ? 'orange' : x === 3 ? 'red' : ''};
`;
interface CircleProps {
  colour: CityColour;
  isSelected: boolean;
}

export const Circle = styled.div`
  width: ${$circleSize}px;
  height: ${$circleSize}px;

  position: absolute;
  z-index: 1;

  /* margin: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  box-shadow: ${({ isSelected }: CircleProps): string =>
    isSelected ? '0px 0px 10px white' : ''};

  border-radius: 50%;
  border: 2px solid
    ${({ colour }: CircleProps) =>
      colour === CityColour.Yellow
        ? darken(0.3, $yellow)
        : colour === CityColour.Black
        ? darken(0.3, $black)
        : colour === CityColour.Blue
        ? darken(0.3, $blue)
        : colour === CityColour.Red
        ? darken(0.3, $red)
        : ''};
  background-color: ${({ colour }: CircleProps): string =>
    colour === CityColour.Yellow
      ? $yellow
      : colour === CityColour.Black
      ? $black
      : colour === CityColour.Blue
      ? $blue
      : colour === CityColour.Red
      ? $red
      : ''};
`;
interface PawnProps {
  isSelected: boolean;
  n: number;
}

const MAX_SIZE = 50;
const MIN_SIZE = 30;
const diff = MAX_SIZE - MIN_SIZE;

export const Pawn = styled.img`
  /* position: absolute; */
  z-index: 10;
  height: ${({ n }): number => MAX_SIZE - ((n - 1) * diff) / 11}px;
  transform: translate(0, -85%);
  filter: drop-shadow(0px 0px 4px);

  animation-duration: ${({ isSelected }: PawnProps): string =>
    isSelected ? '2s' : '0'};
  animation-name: glowpulse;
  animation-iteration-count: infinite;

  @keyframes glowpulse {
    0% {
      filter: drop-shadow(0px 0px 50px);
    }
    80% {
      filter: drop-shadow(0px 0px 1px) brightness(1.5);
      transform: translate(0, -90%) scale(1.15);
    }
    100% {
      filter: drop-shadow(0px 0px 50px);
      transform: translate(0, -85%);
    }
  }
`;

export const PawnContainer = styled.div`
  position: absolute;
  display: flex;
`;

export const CounterContainer = styled.div`
  position: absolute;
  top: 23px;
  z-index: 30;
  display: flex;
  width: 56px;
  justify-content: space-between;
`;

export const CounterButton = styled.div`
  font-family: arial;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px white solid;
  border-radius: 10%;
  height: 14px;
  width: 14px;
  font-size: 22px;
`;
