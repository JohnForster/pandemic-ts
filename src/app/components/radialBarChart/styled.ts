import styled from 'styled-components';
import { lighten, darken } from 'polished';
import CityColour from '../../../types/enums/cityColour';

// TODO move these into a constants file.
const colours = {
  [CityColour.Yellow]: '#F5D547',
  [CityColour.Black]: '#3C3C3B',
  [CityColour.Blue]: '#5867e9',
  [CityColour.Red]: '#DB3069',
};

export const Chart = styled.div``;

interface CircleProps {
  fillColour: CityColour;
}

export const Circle = styled.circle`
  stroke: ${({ fillColour }: CircleProps): string =>
    lighten(0.2, colours[fillColour])};
`;

export const Progress = styled.circle`
  stroke: ${({ fillColour }: CircleProps): string =>
    darken(0.1, colours[fillColour])};
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
