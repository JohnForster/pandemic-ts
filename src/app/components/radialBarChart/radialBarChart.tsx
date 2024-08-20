/* eslint-disable react/prop-types */
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

const RadialBarChart: React.FC<RadialBarChartProps> = props => {
  const circleRadius = Math.min(props.radius, 85);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = (circumference / props.maxValue) * props.progress;
  const progress = props.progress / props.maxValue;
  return (
    <Styled.Container>
      <Styled.Number selected={props.selected} warning={progress >= 0.75}>
        {/* {Math.round((100 * props.progress) / props.maxValue)}% */}
        {props.maxValue - props.progress}
      </Styled.Number>
      <svg viewBox="0 0 180 180" height="100%">
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
    </Styled.Container>
  );
};

RadialBarChart.defaultProps = {
  radius: 80,
  progress: 100,
  strokeWidth: 20,
  dimension: 180,
  maxValue: 100,
  color: 'black',
};

export default RadialBarChart;
