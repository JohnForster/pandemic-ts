import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateY(0)
  }
  to {
    transform rotateY(180)
  }
`;

interface SideProps {
  isShowing: boolean;
}

export const Side = styled.div<SideProps>(
  (props: SideProps) => css`
    transform: rotateY(${props.isShowing ? 0 : 180}deg);
    animation: ${rotate} 0.5s ease-in-out;
    transition: 0.6s;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    height: 100%;
    width: 100%;
  `,
);

export const Container = styled.div`
  position: relative;
  display: grid;
  justify-items: start;
  align-items: start;

  & > * {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;
