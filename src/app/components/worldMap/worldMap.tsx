import React, { ReactNode } from 'react';
import { Paths } from './paths';
import { MapContainer } from './styled';

type WorldMapProps = {
  children: ReactNode;
};

const CONTINENTS_GRADIENT_START = '#5C80BC';
const CONTINENTS_GRADIENT_END = '#3b5b91';

export const WorldMap = (props: WorldMapProps) => {
  return (
    <MapContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="80 110 900 555"
        fill="url('#continents')"
      >
        <defs>
          <linearGradient id="continents" gradientTransform="rotate(45)">
            <stop offset="5%" stopColor={CONTINENTS_GRADIENT_START} />
            <stop offset="95%" stopColor={CONTINENTS_GRADIENT_END} />
          </linearGradient>
        </defs>
        <Paths />
      </svg>
      {props.children}
    </MapContainer>
  );
};
