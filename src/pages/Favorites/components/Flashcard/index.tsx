import React from 'react';
import { Image } from 'react-native';

import Graphic from '../../../../assets/graphic.png';

import {
  Container,
  ExpectedGainsText,
  GraphicContainer,
  InvestmentType,
  MinInvestmentText,
  RiskText,
} from './styles';

const riskText = {
  1: 'Baixo',
  2: 'Baixo',
  3: 'Baixo',
  4: 'Médio',
  5: 'Médio',
  6: 'Médio',
  7: 'Médio',
  8: 'Alto',
  9: 'Alto',
  10: 'Alto',
};

interface IFlashcardProps {
  expectedGains: number;
  minInvest: number;
  type: string;
  isVisible: boolean;
  risk: number;
}

const Flashcard: React.FC<IFlashcardProps> = ({
  expectedGains,
  minInvest,
  isVisible,
  type,
  risk,
}) => (
  <Container isVisible={isVisible}>
    {isVisible && (
      <>
        <GraphicContainer>
          <Image source={Graphic} style={{ width: 50, height: 50 }} />
        </GraphicContainer>
        <ExpectedGainsText>
          {'R$ '}
          {expectedGains}
        </ExpectedGainsText>
        <MinInvestmentText>
          {'R$ '}
          {minInvest}
        </MinInvestmentText>
        <InvestmentType>{type}</InvestmentType>
        <RiskText risk={risk}>
{riskText[risk]}
          {' '}
          Risco
</RiskText>
      </>
    )}
  </Container>
);

export default Flashcard;
