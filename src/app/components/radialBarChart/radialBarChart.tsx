/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import * as Styled from './styled';
import CityColour from '../../../types/enums/cityColour';
import GameStateContext from '../../contexts/gameStateContext';

interface RadialBarChartProps {
  className?: string;
  radius?: number;
  progress?: number;
  strokeWidth?: number;
  dimension?: number;
  color?: CityColour;
  maxValue?: number;
  totalCities?: number;
}

const RadialBarChart: React.FC<RadialBarChartProps> = props => {
  const [gameState] = useContext(GameStateContext)
  const circleRadius = Math.min(props.radius, 85);
  const circumference = 2 * 3.14 * circleRadius;
  const strokeLength = (circumference / props.maxValue) * props.progress;
  return (
    <div className={props.className}>
      <Styled.Number>
        {Math.round((100 * props.progress) / props.maxValue)}%
        {gameState.devMode && 
          <div style={{ fontSize: '18px', color: 'gray' }}>
            ({props.totalCities})
          </div>
        }
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
