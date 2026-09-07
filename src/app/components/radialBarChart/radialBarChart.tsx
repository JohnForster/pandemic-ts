import React from 'react';
import * as Styled from './styled';
import CityColour from '../../../types/enums/cityColour';

interface RadialBarChartProps {
  radius?: number;
  progress?: number;
  strokeWidth?: number;
  dimension?: number;
  color?: CityColour;
  maxValue?: number;
  selected: boolean;
}

export const RadialBarChart: React.FC<RadialBarChartProps> = ({
  radius = 80,
  progress = 100,
  strokeWidth = 20,
  color = 'black',
  maxValue = 100,
  selected,
}) => {
  const circleRadius = Math.min(radius, 85);
  const circumference = 2 * Math.PI * circleRadius;
  const strokeLength = (circumference / maxValue) * progress;
  const progressRatio = progress / maxValue;
  return (
    <Styled.Container>
      <Styled.Number $selected={selected} $warning={progressRatio >= 0.75}>
        {maxValue - progress}
      </Styled.Number>
      <svg viewBox="0 0 180 180" height="100%">
        <Styled.Circle
          $fillColour={color}
          strokeWidth={strokeWidth}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
        <Styled.Progress
          $fillColour={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${strokeLength},${circumference}`}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
      </svg>
    </Styled.Container>
  );
};
