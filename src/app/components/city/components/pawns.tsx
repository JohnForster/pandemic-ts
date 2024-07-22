import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import GameState, { Player } from '../../../../types/gameData';

interface PawnProps {
  isSelected: boolean;
  isCurrentTurn: boolean;
  n: number;
  i: number;
}

const MAX_SIZE = 2.1;
const MIN_SIZE = 1.6;
const SIZE_DIFF = MAX_SIZE - MIN_SIZE;

const MAX_MARGIN = 0;
const MIN_MARGIN = -0.3;
const MARGIN_DIFF = MAX_MARGIN - MIN_MARGIN;

export const Pawn = styled.img<PawnProps>(
  (props: PawnProps) => css`
    z-index: ${10 - props.i};
    height: ${MAX_SIZE - ((props.n - 1) * SIZE_DIFF) / 11}vw;
    transform: translate(0, ${props.isSelected ? '-105%' : '-85%'});
    margin-right: ${MAX_MARGIN - ((props.n - 1) * MARGIN_DIFF) / 11}vw;

    filter: drop-shadow(0px 0px 5px);

    animation-duration: 2s;
    animation-name: ${props.isCurrentTurn
      ? 'glowpulse'
      : props.isSelected
      ? ''
      : 'pulse'};
    animation-iteration-count: infinite;

    @keyframes glowpulse {
      0% {
        filter: drop-shadow(0 0 2.1vw) drop-shadow(0 0 1vw) drop-shadow(0 0 5vw);
      }
      80% {
        filter: drop-shadow(0 0 0.1vw) drop-shadow(0 0 0.1vw)
          drop-shadow(0 0 0.1vw) brightness(1.8);
        transform: translate(0, -90%) scale(1.2);
      }
      100% {
        filter: drop-shadow(0 0 2.1vw) drop-shadow(0 0 1vw) drop-shadow(0 0 5vw);
        transform: translate(0, -85%);
      }
    }

    @keyframes pulse {
      0% {
      }
      50% {
        filter: drop-shadow(0px 0px 3px);
      }
    }
  `,
);

export const PawnContainer = styled.div`
  z-index: 101;
  position: absolute;
  display: flex;
`;

type PawnsProps = {
  gameState: GameState;
  players: Player[];
  handlePawnClick: (id: string) => MouseEventHandler<HTMLImageElement>;
};

export const Pawns = (props: PawnsProps) => {
  return (
    <PawnContainer>
      {props.players.map((p, i, { length }) => (
        <Pawn
          key={`pawn-${i}`}
          i={i}
          isCurrentTurn={p.id === props.gameState.currentPlayerId}
          isSelected={props.gameState.selectedPawnId === p.id}
          src={`assets/pawns/pawn_${p.colour}.png`}
          n={length}
          onClick={props.handlePawnClick(p.id)}
        />
      ))}
    </PawnContainer>
  );
};
