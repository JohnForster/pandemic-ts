import styled from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';

export const Chart = styled.div``;

interface CircleProps {
  $fillColour: CityColour;
}

export const Circle = styled.circle<CircleProps>`
  stroke: ${({ $fillColour, theme }) => lighten(0.2, theme.colours[$fillColour])};
`;

export const Progress = styled.circle<CircleProps>`
  stroke: ${({ $fillColour, theme }) => darken(0.1, theme.colours[$fillColour])};
  transform: rotate(-90deg);
  transform-origin: center;
  transition: all 0.2s cubic-bezier(0.58, 0.16, 0.5, 1.14);
  transition-delay: 0.3s;
`;

interface NumberProps {
  $selected: boolean;
  $warning: boolean;
}

export const Number = styled.div<NumberProps>`
  position: absolute;
  text-align: center;
  text-decoration: ${({ $selected }) => ($selected ? 'underline' : ' none')};
  text-decoration-thickness: 1px;
  text-decoration-color: gray;
  text-decoration-style: dotted;
  user-select: none;
  font-size: ${({ $warning }) => ($warning ? '2.2vw' : '1.68vw')};
  transition: font-size 0.5s ease;

  animation: ${({ $warning }) => ($warning ? '1.5s' : '0s')} blink infinite;

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
