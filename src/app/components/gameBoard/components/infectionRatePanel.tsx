import React from 'react';
import styled from 'styled-components';
import { NewsModal } from '../../newsModal/newsModal';

type InfectionRatePanelProps = {};

const InfectionRateContainer = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 60%;
`;

const InfectionRateInput = styled.input``;

export const InfectionRatePanel = (props: InfectionRatePanelProps) => {
  return (
    <InfectionRateContainer>
      <NewsModal title="Infection Rate">
        <InfectionRateInput />
      </NewsModal>
    </InfectionRateContainer>
  );
};
