import styled from 'styled-components';
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

export const Number = styled.div`
  position: absolute;
  font-size: 1.68vw;
  text-align: center;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
