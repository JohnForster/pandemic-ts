import styled from 'styled-components';
import { lighten, darken } from 'polished';
import Colours from '../../../types/enums/colours';

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
  /* z-index: ${({ y }: ContainerProps): number => y}; */
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
  colour: Colours;
}

export const Name = styled.div`
  white-space: nowrap;
  pointer-events: none;
  font-size: 1rem;

  z-index: 20;

  color: ${({ colour }: NameProps): string =>
    colour === Colours.Yellow
      ? lighten(0.2, $yellow)
      : colour === Colours.Black
      ? lighten(0.6, $black)
      : colour === Colours.Blue
      ? lighten(0.2, $blue)
      : colour === Colours.Red
      ? lighten(0.35, $red)
      : ''};
`;

interface InfectionProps {
  x: number;
}

export const Infection = styled.div`
  line-height: 19px;
  pointer-events: none;
  z-index: 25;
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

  /* text-shadow: ${({ x }: InfectionProps) =>
    x === 3 ? '1px 1px 2px white, 1px 1px 2px white' : ''}; */
`;
interface CircleProps {
  colour: Colours;
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
      colour === Colours.Yellow
        ? darken(0.3, $yellow)
        : colour === Colours.Black
        ? darken(0.3, $black)
        : colour === Colours.Blue
        ? darken(0.3, $blue)
        : colour === Colours.Red
        ? darken(0.3, $red)
        : ''};
  background-color: ${({ colour }: CircleProps): string =>
    colour === Colours.Yellow
      ? $yellow
      : colour === Colours.Black
      ? $black
      : colour === Colours.Blue
      ? $blue
      : colour === Colours.Red
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
