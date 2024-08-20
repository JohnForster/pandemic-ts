import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';
import { COLOURS } from '../../colours';

export const Chart = styled.div``;

interface CircleProps {
  fillColour: CityColour;
}

export const Circle = styled.circle`
  stroke: ${({ fillColour }: CircleProps): string =>
    lighten(0.2, COLOURS[fillColour])};
`;

export const Progress = styled.circle`
  stroke: ${({ fillColour }: CircleProps): string =>
    darken(0.1, COLOURS[fillColour])};
  transform: rotate(-90deg);
  transform-origin: center;
  transition: all 0.2s cubic-bezier(0.58, 0.16, 0.5, 1.14);
  transition-delay: 0.3s;
`;

interface NumberProps {
  selected: boolean;
  warning: boolean;
}

export const Number = styled.div`
  position: absolute;
  text-align: center;
  text-decoration: ${({ selected }: NumberProps) =>
    selected ? 'underline' : ' none'};
  user-select: none;
  font-size: ${({ warning }: NumberProps) => (warning ? '2.2vw' : '1.68vw')};
  transition: font-size 0.5s ease;

  animation: ${({ warning }: NumberProps) => (warning ? '1.5s' : '0s')} blink
    infinite;

  @keyframes circlepulse {
    0% {
    }
    50% {
      filter: drop-shadow(0px 0px 10px white);
    }
  }

  @keyframes blink {
    0%,
    49% {
      color: white;
    }
    50%,
    100% {
      color: red;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
