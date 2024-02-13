import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

type NewsModalProps = {
  title: string;
  children: ReactNode | ReactNodeArray;
};

export const NewsModal = (props: NewsModalProps) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>{props.title}</Heading>
      </HeadingContainer>
      {props.children}
    </Container>
  );
};

export const Container = styled.div`
  border-top: 5px solid red;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: black;
  font-size: 0.84vw;
  width: 100%;
  height: 100%;
  font-family: impact;
  color: white;
`;

const HeadingContainer = styled.div`
  transform: translateY(-100%);
  position: absolute;
  width: 100%;
  margin -0.5rem -0.7rem;
  padding: 0.2rem;
`;

const Heading = styled.div`
  background-color: red;
  width: 50%;
  margin-left: auto;
  text-align: center;
  font-size: x-large;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #ff0000;
    transform-origin: top right;
    transform: skew(-30deg, 0deg);
  }
`;
