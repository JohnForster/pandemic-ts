import styled, { css } from 'styled-components';
import CityColour from '../../../../types/enums/cityColour';
import { getRgb } from '../../../colours';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const PlayerBox = styled.div<PlayerBoxProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1px 4px;
  // font-weight: 300;
  box-sizing: border-box;

  border-style: solid;
  border-radius: 2px;
  ${({ $isCurrentPlayer }) =>
    $isCurrentPlayer
      ? `border-width: 2px; border-color: white;`
      : 'border-width: 2px; border-color: black;'}

  transition: border-width 0.2s linear, border-color 0.2s linear;
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

type PlayerBoxProps = { $isCurrentPlayer: boolean };

export const PlayerLocation = styled.span<{ $colour: CityColour }>(
  (props: { $colour: CityColour }) => css`
    text-decoration: underline ${getRgb(props.$colour)};
    margin-left: auto;
    text-shadow: 0px 0px 10px ${getRgb(props.$colour)};
    text-align: right;
  `,
);

type PlayerNameProps = { $isCurrentPlayer: boolean };
export const PlayerName = styled.span<PlayerNameProps>(
  (props: PlayerNameProps) => css`
    text-decoration: ${props.$isCurrentPlayer ? 'underline' : 'none'};
    line-height: 0.8rem;
  `,
);

export const Role = styled.span`
  font-size: small;
  font-family: Oswald;
  font-weight: normal;
`;
