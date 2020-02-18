/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './styled';
import CityColour from '../../../types/enums/cityColour';
import City from '../city/city';

interface RadialBarChartProps {
  className?: string;
  radius?: number;
  progress?: number;
  strokeWidth?: number;
  dimension?: number;
  color?: CityColour;
  maxValue?: number;
}

const DEFAULT_COLOR = '#040404';

const RadialBarChart: React.FC<RadialBarChartProps> = props => {
  const circleRadius = Math.min(props.radius, 85);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = (circumference / props.maxValue) * props.progress;
  return (
    <div className={props.className}>
      <Styled.Number>
        {Math.round((100 * props.progress) / props.maxValue)}%
      </Styled.Number>
      <svg
        viewBox="0 0 180 180"
        width={props.dimension}
        height={props.dimension}
      >
        <Styled.Circle
          fillColour={props.color}
          strokeWidth={props.strokeWidth}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
        <Styled.Progress
          fillColour={props.color}
          strokeWidth={props.strokeWidth}
          strokeDasharray={`${strokeLength},${circumference}`}
          fill="none"
          cx="90"
          cy="90"
          r={circleRadius}
        />
      </svg>
    </div>
  );
};

RadialBarChart.defaultProps = {
  radius: 80,
  progress: 100,
  strokeWidth: 20,
  dimension: 180,
  maxValue: 100,
  color: CityColour.Black,
};

export default RadialBarChart;
