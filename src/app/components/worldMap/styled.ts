import styled from 'styled-components';

const OCEANS_GRADIENT_START = '#304873';
const OCEANS_GRADIENT_END = '#1e2d48';

export const MapContainer = styled.div`
  margin-top: -5%;
  background: linear-gradient(
    225deg,
    ${OCEANS_GRADIENT_START},
    ${OCEANS_GRADIENT_END}
  );
`;
