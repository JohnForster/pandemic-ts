import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotateY(0)
  }
  to {
    transform rotateY(180)
  }
`;

const panel = css`
  position: absolute;
  z-index: 400;
  /* Bottom & left could be done in a container div */
  bottom: 2.52vw;
  left: 1%;
  padding: 0.21vw;
  border-radius: 0.24vw;
  background-color: white;
  font-size: 0.84vw;
  height: 45%;
  width: 10%;
`;

interface SideProps {
  isShowing: boolean;
}

export const Side = styled.div<SideProps>(
  props => css`
    ${panel}
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    animation: ${rotate} 0.5s ease-in-out;
    transform: rotateY(${props.isShowing ? 0 : 180}deg);
    transition: 0.6s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  `,
);
