import React, { ReactNode } from 'react';
import { Paths } from './paths';

type WorldMapProps = {
  children: ReactNode;
};

// const BACKGROUND_COLOUR = '#13315C';
// const CONTINENT_COLOUR = '#537CA2';
const CONTINENTS_GRADIENT_START = '#5C80BC';
const CONTINENTS_GRADIENT_END = '#3b5b91';
const OCEANS_GRADIENT_START = '#304873';
const OCEANS_GRADIENT_END = '#1e2d48';

export const WorldMap = (props: WorldMapProps) => {
  return (
    <div
      style={{
        marginTop: '-5%',
        background: `linear-gradient(225deg, ${OCEANS_GRADIENT_START}, ${OCEANS_GRADIENT_END})`,
      }}
    >
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
    </div>
  );
};
