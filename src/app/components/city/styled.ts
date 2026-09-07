import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';
import { getRgb, getSeverityColour } from '../../colours';

const CIRCLE_SIZE = 1.5;

interface ContainerProps {
  $x: number;
  $y: number;
}

export const Container = styled.div<ContainerProps>`
  z-index: ${({ $y }) => 1_000 + Math.round($y * 10)};
  position: absolute;
  transform: translate(${({ $x, $y }) => `${$x}%, ${$y}%`});
  top: ${({ $y }) => $y}%;
  left: ${({ $x }) => $x}%;
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
  $colour: CityColour;
  $x: number;
}

export const Name = styled.div<NameProps>`
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  font-size: 1vw;
  font-weight: bold;
  font-family: Oswald;

  z-index: 20;
  transition: color 0.5s ease;
  color: ${({ $x }) => getSeverityColour($x)};
`;

interface CircleProps {
  $colour: CityColour;
  $isSelected: boolean;
  $infection: number;
  $isResearchStation: boolean;
  $isProtected: boolean;
}

const getBoxShadow = (
  infection: number,
  cityColour: CityColour,
  isSelected: boolean,
  isProtected: boolean,
) => {
  const shadowColour = isProtected
    ? 'green'
    : isSelected
    ? 'white'
    : darken(0.1, getRgb(cityColour));
  const sizes: { [key: number]: string } = {
    0: isSelected ? '0.4rem' : '0',
    1: '0.5rem',
    2: '0.7rem',
    3: '1rem',
    4: '1rem',
  };

  const size = isProtected && infection > 0 ? '0.4rem' : sizes[infection];
  return `0px 0px ${size} ${size} ${shadowColour}`;
};

export const Circle = styled.div<CircleProps>(
  ({
    $colour,
    $isSelected,
    $infection,
    $isResearchStation,
    $isProtected,
  }) => css`
    width: ${$isResearchStation ? CIRCLE_SIZE * 2 : CIRCLE_SIZE}vw;
    height: ${CIRCLE_SIZE}vw;

    position: absolute;
    z-index: -1;

    /* margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* box-shadow: ${$isSelected ? '0px 0px 10px white' : ''}; */
    box-shadow: ${getBoxShadow($infection, $colour, $isSelected, $isProtected)};


    border-radius: ${$isResearchStation ? '0' : '50%'};
    transition: border 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, width 0.2s ease, border-radius 0.2s ease;
    border: ${$isProtected ? '0.2vw' : '0.1vw'} solid ${
    $isProtected ? 'green' : darken(0.3, getRgb($colour))
  };
    background-color: ${
      $isResearchStation ? lighten(0.2, getRgb($colour)) : getRgb($colour)
    };
  `,
);

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
