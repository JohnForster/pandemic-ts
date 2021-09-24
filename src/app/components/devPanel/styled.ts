import styled from 'styled-components';

interface props {
  height: number;
}

export const DevPanel = styled.div`
  position: absolute;
  z-index: 400;
  bottom: 0.42vw;
  left: 1%;
  padding: 5px;
  border-radius: 0.24vw;
  background-color: white;
  font-size: 0.84vw;
`;
