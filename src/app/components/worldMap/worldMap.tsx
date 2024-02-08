import React, { ReactNode } from 'react';
import { Paths } from './paths';

type WorldMapProps = {
  children: ReactNode;
};

const BACKGROUND_COLOUR = '#13315C';
const CONTINENT_COLOUR = '#537CA2';

export const WorldMap = (props: WorldMapProps) => {
  return (
    <div style={{ marginTop: '-5%', background: BACKGROUND_COLOUR }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="80 110 900 555"
        fill={CONTINENT_COLOUR}
      >
        <Paths />
      </svg>
      {props.children}
    </div>
  );
};
