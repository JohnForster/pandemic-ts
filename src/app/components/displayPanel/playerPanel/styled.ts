import styled, { css } from 'styled-components';
import CityColour from '../../../../types/enums/cityColour';
import { getRgb } from '../../../colours';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const PlayerBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2px;
  // font-weight: 300;
`;

const PAWN_HEIGHT = 1.5;
export const PawnImage = styled.img`
  height: ${PAWN_HEIGHT}vw;
  padding-right: 5px;
  filter: drop-shadow(1px 1px 0px #fff) drop-shadow(-1px -1px 0px #fff)
    drop-shadow(-1px 1px 0px #fff) drop-shadow(1px -1px 0px #fff);
  flex: 0;
`;

export const NameInput = styled.input`
  margin-right: 0.42vw;
  font-size: 0.84vw;
`;

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
  `,
);

export const Role = styled.span`
  font-size: small;
  font-family: Oswald;
  font-weight: normal;
`;
