import styled, { css } from 'styled-components';
import CityColour from '../../../../types/enums/cityColour';

export const Container = styled.div`
  width: 100%;
`;

export const PlayerBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2px;
  font-weight: 400;
`;

const PAWN_HEIGHT = 1.5;
export const PawnImage = styled.img`
  height: ${PAWN_HEIGHT}vw;
  padding-right: 5px;
  filter: drop-shadow(2px 2px 2px #222);
  flex: 0;
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

const getRgb = (colour: CityColour): string => {
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
    text-decoration: underline ${getRgb(props.colour)};
    margin-left: auto;
    text-shadow: 0px 0px 10px ${getRgb(props.colour)};
    text-align: right;
  `,
);

type PlayerNameProps = { isCurrentPlayer: boolean };
export const PlayerName = styled.span<PlayerNameProps>(
  (props: PlayerNameProps) => css`
    text-decoration: ${props.isCurrentPlayer ? 'underline' : 'none'};
    font-weight: bold;
  `,
);
