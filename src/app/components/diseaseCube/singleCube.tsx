import React from 'react';
import CityColour from '../../../types/enums/cityColour';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import { getRgb } from '../../colours';

type SingleCubeProps = {
  colour: CityColour;
};

type SideProps = {
  colour: string;
};

const Left = styled.polygon<SideProps>(
  ({ colour }) => css`
    opacity: 0.85;
    fill: ${colour};
  `,
);
const Right = styled.polygon<SideProps>(
  ({ colour }) => css`
    opacity: 0.8;
    fill: ${darken(0.3, colour)};
  `,
);
const Top = styled.polygon<SideProps>(
  ({ colour }) => css`
    opacity: 0.95;
    fill: ${lighten(0.2, colour)};
  `,
);

const CubeContainer = styled.div`
  margin-top: -20px;
  z-index: 10000;
`;

export const SingleCube = (props: SingleCubeProps) => {
  return (
    <CubeContainer>
      <svg
        height="35px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 58 58"
        fill="#000000"
      >
        <g stroke={props.colour === CityColour.Yellow ? 'black' : 'white'}>
          <Left
            colour={getRgb(props.colour)}
            points="29,58 3,45 3,13 29,26 "
          ></Left>
          <Right
            colour={getRgb(props.colour)}
            points="29,58 55,45 55,13 29,26 "
          ></Right>
          <Top
            colour={getRgb(props.colour)}
            points="3,13 28,0 55,13 29,26 "
          ></Top>
        </g>
      </svg>
    </CubeContainer>
  );
};
