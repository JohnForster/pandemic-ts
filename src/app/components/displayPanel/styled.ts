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
  bottom: 60px;
  left: 1%;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  font-size: 20px;
  height: 45%;
  width: 10%;
`;

interface SideProps {
  isShowing: boolean;
}

export const Side = styled.div(
  (props: SideProps) => css`
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
