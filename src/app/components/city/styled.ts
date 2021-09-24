import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';

const $yellow = '#F5D547';
const $black = '#3C3C3B';
const $blue = '#5867e9';
const $red = '#DB3069';

const $circleSize = 35;
const circleSize = 1.5;

interface ContainerProps {
  x: number;
  y: number;
}

export const Container = styled.div`
  z-index: ${({ y }: ContainerProps): number => Math.round(100 + y / 100)};
  position: absolute;
  transform: translate(${({ x, y }: ContainerProps) => `${x}%, ${y}%`});
  top: ${({ y }: ContainerProps): number => y}%;
  left: ${({ x }: ContainerProps): number => x}%;
  color: white;
  transform: translateY(-${circleSize / 2}vw);
  text-shadow: 0px 0px 1px black, 1px 1px 1px black;

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
  font-size: 1vw;

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
  font-family: 'Oswald', sans-serif;
  font-weight: none;

  line-height: 1vw;
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
  infection: number;
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

const getBoxShadow = (
  infection: number,
  cityColour: CityColour,
  isSelected: boolean,
) => {
  const shadowColour = isSelected ? 'white' : getRgb(cityColour);
  const sizes: { [key: number]: string } = {
    0: isSelected ? '0.4rem' : '0',
    1: '0.5rem',
    2: '0.7rem',
    3: '1rem',
  };

  const size = sizes[infection];
  return `0px 0px ${size} ${size} ${shadowColour}`;
};

export const Circle = styled.div<CircleProps>(
  ({ colour, isSelected, infection }: CircleProps) => css`
    width: ${circleSize}vw;
    height: ${circleSize}vw;

    position: absolute;
    z-index: 1;

    /* margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* box-shadow: ${isSelected ? '0px 0px 10px white' : ''}; */
    box-shadow: ${getBoxShadow(infection, colour, isSelected)};
    

    border-radius: 50%;
    transition: border 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    border: 0.1vw solid ${darken(0.3, getRgb(colour))};
    background-color: ${getRgb(colour)};
  `,
);
interface PawnProps {
  isSelected: boolean;
  isCurrentTurn: boolean;
  n: number;
}

// const MAX_SIZE = 50;
// const MIN_SIZE = 30;

const MAX_SIZE = 2.1;
const MIN_SIZE = 1.3;
const diff = MAX_SIZE - MIN_SIZE;

export const Pawn = styled.img<PawnProps>(
  (props: PawnProps) => css`
    /* position: absolute; */
    z-index: 10;
    height: ${MAX_SIZE - ((props.n - 1) * diff) / 11}vw;
    transform: translate(0, ${props.isSelected ? '-105%' : '-85%'});

    filter: drop-shadow(0px 0px 4px);

    animation-duration: ${props.isCurrentTurn ? '2s' : '0'};
    animation-name: glowpulse;
    animation-iteration-count: infinite;

    @keyframes glowpulse {
      0% {
        filter: drop-shadow(0 0 2.1vw);
      }
      80% {
        filter: drop-shadow(0 0 0.1vw) brightness(1.5);
        transform: translate(0, -90%) scale(1.15);
      }
      100% {
        filter: drop-shadow(0 0 2.1vw);
        transform: translate(0, -85%);
      }
    }
  `,
);

export const PawnContainer = styled.div`
  z-index: 101;
  position: absolute;
  display: flex;
`;

export const CounterContainer = styled.div`
  position: absolute;
  top: 1vw;
  z-index: 30;
  display: flex;
  width: 2.4vw;
  justify-content: space-between;
`;

export const CounterButton = styled.div`
  font-family: arial;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px white solid;
  border-radius: 10%;
  height: 0.6vw;
  width: 0.6vw;
  font-size: 0.9vw;
  user-select: none;
`;
