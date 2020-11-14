/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import api from './api.json';

import Flashcard from './components/Flashcard';

import { Container, FlashcardContainer } from './styles';

const InvestmentStyles: React.FC = () => {
  const [cardData, setCardData] = useState(api);

  return (
    <Container>
      <FlashcardContainer>
        {cardData.map((data, i, a) => (
          <Flashcard
            key={data.id}
            id={data.id}
            expectedGains={data.expectedGains}
            previousGains={data.previousGains}
            minInvest={data.minInvest}
            investmentType={data.investmentType}
            risk={data.risk}
          />
        ))}
      </FlashcardContainer>
    </Container>
  );
};

export default InvestmentStyles;
