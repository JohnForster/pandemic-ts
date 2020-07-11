import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';

const $yellow = '#F5D547';
const $black = '#3C3C3B';
const $blue = '#5867e9';
const $red = '#DB3069';

const $circleSize = 35;

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
  transition: color 0.5s ease;
  color: ${({ x }: NameProps): string =>
    x === 1 ? 'gold' : x === 2 ? 'orange' : x === 3 ? 'red' : ''};
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
      ? '0'
      : x === 1
      ? '16px'
      : x === 2
      ? '20px'
      : x === 3
      ? '24px'
      : ''};

  transition: color 0.5s ease, font-size 0.5s ease;
  color: ${({ x }: InfectionProps): string =>
    x === 1 ? 'gold' : x === 2 ? 'orange' : x === 3 ? 'red' : ''};
`;
interface CircleProps {
  colour: CityColour;
  isSelected: boolean;
}

const getRgb = (colour: CityColour): string => {
  switch (colour) {
    case CityColour.Yellow:
      return $yellow;
    case CityColour.Black:
      return $black;
    case CityColour.Blue:
      return $blue;
    case CityColour.Red:
      return $red;
  }
};

export const Circle = styled.div(
  ({ colour, isSelected }: CircleProps) => css`
    width: ${$circleSize}px;
    height: ${$circleSize}px;

    position: absolute;
    z-index: 1;

    /* margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    box-shadow: ${isSelected ? '0px 0px 10px white' : ''};

    border-radius: 50%;
    transition: border 0.2s ease, background-color 0.2s ease;
    border: 2px solid ${darken(0.3, getRgb(colour))};
    background-color: ${getRgb(colour)};
  `,
);
interface PawnProps {
  isSelected: boolean;
  isCurrentTurn: boolean;
  n: number;
}

const MAX_SIZE = 50;
const MIN_SIZE = 30;
const diff = MAX_SIZE - MIN_SIZE;

export const Pawn = styled.img(
  (props: PawnProps) => css`
    /* position: absolute; */
    z-index: 10;
    height: ${MAX_SIZE - ((props.n - 1) * diff) / 11}px;
    transform: translate(0, ${props.isSelected ? '-105%' : '-85%'});

    filter: drop-shadow(0px 0px 4px);

    animation-duration: ${props.isCurrentTurn ? '2s' : '0'};
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
  `,
);

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
  user-select: none;
`;
