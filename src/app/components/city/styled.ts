import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';
import { COLOURS, getRgb } from '../../colours';

const CIRCLE_SIZE = 1.5;

interface ContainerProps {
  x: number;
  y: number;
}

export const Container = styled.div`
  z-index: ${({ y }: ContainerProps): number => 1_000 + Math.round(y * 10)};
  position: absolute;
  transform: translate(${({ x, y }: ContainerProps) => `${x}%, ${y}%`});
  top: ${({ y }: ContainerProps): number => y}%;
  left: ${({ x }: ContainerProps): number => x}%;
  color: white;
  transform: translateY(-${CIRCLE_SIZE / 2}vw);
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
  user-select: none;
  pointer-events: none;
  font-size: 1vw;
  font-weight: bold;
  font-family: Oswald;

  z-index: 20;
  transition: color 0.5s ease;
  color: ${({ x }: NameProps): string =>
    x === 2 ? 'gold' : x === 3 ? 'orange' : x === 4 ? 'red' : ''};
  /* color: ${({ colour }: NameProps): string =>
    colour === 'yellow'
      ? lighten(0.3, COLOURS.yellow)
      : colour === 'black'
      ? lighten(0.65, COLOURS.black)
      : colour === 'blue'
      ? lighten(0.3, COLOURS.blue)
      : colour === 'red'
      ? lighten(0.4, COLOURS.red)
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
      : x === 3 || x === 4
      ? '24px'
      : ''};

  transition: color 0.5s ease, font-size 0.5s ease;
  color: ${({ x }: InfectionProps): string =>
    x === 1 ? 'gold' : x === 2 ? 'orange' : x === 3 || x === 4 ? 'red' : ''};
`;
interface CircleProps {
  colour: CityColour;
  isSelected: boolean;
  infection: number;
  isResearchStation: boolean;
}

const getBoxShadow = (
  infection: number,
  cityColour: CityColour,
  isSelected: boolean,
) => {
  const shadowColour = isSelected ? 'white' : darken(0.1, getRgb(cityColour));
  const sizes: { [key: number]: string } = {
    0: isSelected ? '0.4rem' : '0',
    1: '0.5rem',
    2: '0.7rem',
    3: '1rem',
    4: '1rem',
  };

  const size = sizes[infection];
  return `0px 0px ${size} ${size} ${shadowColour}`;
};

export const Circle = styled.div<CircleProps>(
  ({ colour, isSelected, infection, isResearchStation }: CircleProps) => css`
    width: ${isResearchStation ? CIRCLE_SIZE * 2 : CIRCLE_SIZE}vw;
    height: ${CIRCLE_SIZE}vw;

    position: absolute;
    z-index: -1;

    /* margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* box-shadow: ${isSelected ? '0px 0px 10px white' : ''}; */
    box-shadow: ${getBoxShadow(infection, colour, isSelected)};
    

    border-radius: ${isResearchStation ? '0' : '50%'};
    transition: border 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, border-radius 0.2s ease;
    border: 0.1vw solid ${darken(0.3, getRgb(colour))};
    background-color: ${
      isResearchStation ? lighten(0.2, getRgb(colour)) : getRgb(colour)
    };
  `,
);

interface PawnProps {
  isSelected: boolean;
  isCurrentTurn: boolean;
  n: number;
  i: number;
}

// const MAX_SIZE = 2.1;
// const MIN_SIZE = 1.6;
// const SIZE_DIFF = MAX_SIZE - MIN_SIZE;

// const MAX_MARGIN = 0;
// const MIN_MARGIN = -0.3;
// const MARGIN_DIFF = MAX_MARGIN - MIN_MARGIN;

// export const Pawn = styled.img<PawnProps>(
//   (props: PawnProps) => css`
//     /* position: absolute; */
//     z-index: ${10 - props.i};
//     height: ${MAX_SIZE - ((props.n - 1) * SIZE_DIFF) / 11}vw;
//     transform: translate(0, ${props.isSelected ? '-105%' : '-85%'});
//     margin-right: ${MAX_MARGIN - ((props.n - 1) * MARGIN_DIFF) / 11}vw;

//     filter: drop-shadow(0px 0px 5px);

//     animation-duration: 2s;
//     animation-name: ${props.isCurrentTurn
//       ? 'glowpulse'
//       : props.isSelected
//       ? ''
//       : 'pulse'};
//     animation-iteration-count: infinite;

//     @keyframes glowpulse {
//       0% {
//         filter: drop-shadow(0 0 2.1vw) drop-shadow(0 0 1vw) drop-shadow(0 0 5vw);
//       }
//       80% {
//         filter: drop-shadow(0 0 0.1vw) drop-shadow(0 0 0.1vw)
//           drop-shadow(0 0 0.1vw) brightness(1.8);
//         transform: translate(0, -90%) scale(1.2);
//       }
//       100% {
//         filter: drop-shadow(0 0 2.1vw) drop-shadow(0 0 1vw) drop-shadow(0 0 5vw);
//         transform: translate(0, -85%);
//       }
//     }

//     @keyframes pulse {
//       0% {
//       }
//       50% {
//         filter: drop-shadow(0px 0px 3px);
//       }
//     }
//   `,
// );

// export const PawnContainer = styled.div`
//   z-index: 101;
//   position: absolute;
//   display: flex;
// `;

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
