import styled from 'styled-components';

interface props {
  height: number;
}

export const DevPanel = styled.div`
  position: absolute;
  z-index: 400;
  bottom: 10px;
  left: 1%;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  font-size: 20px;
`;
