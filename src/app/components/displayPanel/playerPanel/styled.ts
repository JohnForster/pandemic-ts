import styled, { css } from 'styled-components';
import CityColour from '../../../../types/enums/cityColour';

export const PlayerBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PawnImage = styled.img`
  height: 1.4vw;
  margin: 2px 15px 2px 5px;
  filter: drop-shadow(2px 2px 2px #222);
`;

export const NameInput = styled.input`
  margin-right: 0.42vw;
  font-size: 0.84vw;
  width: 100%;
`;

const $yellow = '#F5D547';
const $black = '#3C3C3B';
const $blue = '#5867e9';
const $red = '#DB3069';

const p = (x: any) => {
  console.log(x);
  return x;
};

const getRgb = (colour: CityColour): string => {
  console.log('colour:', colour);
  switch (colour) {
    case CityColour.Yellow:
      return $yellow;
    case CityColour.Black:
      return $black;
    case CityColour.Blue:
      return $blue;
    case CityColour.Red:
      return $red;
  }
};

export const PlayerLocation = styled.span<{ colour: CityColour }>(
  (props: { colour: CityColour }) => css`
    text-decoration: underline ${p(getRgb(props.colour))};
    color: ${p(getRgb(props.colour))};
  `,
);
