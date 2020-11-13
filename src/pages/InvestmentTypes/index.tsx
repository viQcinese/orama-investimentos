import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';
import api from './api.json';

import {
  Container,
  PromptContainer,
  PromptMain,
  PromptSecondary,
  Button1,
  Button2,
  ButtonsContainer,
  ButtonText,
  Carousel,
  Flashcard,
  FlashcardTitle,
  FlashcardText,
  FlashcardButton,
  FlashcardButtonText,
  CarouselPrevious,
  CarouselNext,
} from './styles';

const InvestmentStyles: React.FC = () => {
  const [data, setData] = useState(api);
  const [current, setCurrent] = useState(0);

  const navigation = useNavigation();

  const handleNext = useCallback(() => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(old => old + 1);
    }
  }, [current, data]);

  const handlePrevious = useCallback(() => {
    if (current === 0) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(0);
    }
  }, [current, data]);

  return (
    <Container>
      <PromptContainer>
        <PromptMain>No que quer investir?</PromptMain>
        <ButtonsContainer>
          <Button1 onPress={() => console.log('hi')}>
            <ButtonText>Top Investimentos</ButtonText>
          </Button1>
          <Button2 onPress={() => console.log('hi')}>
            <ButtonText>Todos</ButtonText>
          </Button2>
        </ButtonsContainer>
      </PromptContainer>
      <PromptContainer>
        <PromptMain>Quer começar com quanto?</PromptMain>
        <PromptSecondary>R$ 5500.00</PromptSecondary>
      </PromptContainer>

      <Carousel>
        <Flashcard style={{ backgroundColor: '#24c6dc' }} />

        <CarouselPrevious onPress={handlePrevious}>
          <Icon name="chevron-left" size={48} color="#3d5198" />
        </CarouselPrevious>

        <CarouselNext onPress={handleNext}>
          <Icon name="chevron-right" size={48} color="#3d5198" />
        </CarouselNext>

        <Flashcard
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}
        >
          <View>
            <FlashcardTitle>{data[current].title}</FlashcardTitle>
            <FlashcardText>{data[current].text}</FlashcardText>
          </View>
          <FlashcardButton onPress={() => navigation.navigate('Investments')}>
            <FlashcardButtonText>Quero Saber Mais</FlashcardButtonText>
          </FlashcardButton>
        </Flashcard>

        <Flashcard style={{ backgroundColor: '#24c6dc' }} />
      </Carousel>
    </Container>
  );
};

export default InvestmentStyles;
