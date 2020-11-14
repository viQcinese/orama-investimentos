import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { Image, View } from 'react-native';

import Logo from '../../assets/orama.png';

import {
  Container,
  Carousel,
  Flashcard,
  FlashcardTitle,
  FlashcardText,
  FlashcardButton,
  FlashcardButtonText,
  CarouselPrevious,
  CarouselNext,
  ImageContainer,
  IconContainer,
} from './styles';

const info = [
  {
    icon: 'dollar-sign',
    color: '#ffb15e',
    title: 'Como você quer investir hoje?',
    text: 'Explore e descubra na prática o seu perfil de investidor!',
    button: false,
  },
  {
    color: '#129d9f',
    title: 'Quero proteger o meu dinheiro',
    text: 'Investimentos de menor risco e retorno mais demorado',
    button: true,
  },
  {
    color: '#129d9f',
    title: 'Quero arriscar mais',
    text: 'Investimentos com maior risco e retornos mais rápidos',
    button: true,
  },
];

const InvestmentStyles: React.FC = () => {
  const [data, setData] = useState(info);
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
      setCurrent(old => old - 1);
    }
  }, [current, data]);

  return (
    <Container>
      <ImageContainer>
        <Image source={Logo} />
      </ImageContainer>

      <Carousel>
        <CarouselPrevious onPress={handlePrevious}>
          <Icon name="chevron-left" size={48} color="#f5f5f5" />
        </CarouselPrevious>

        <CarouselNext onPress={handleNext}>
          <Icon name="chevron-right" size={48} color="#f5f5f5" />
        </CarouselNext>

        <Flashcard>
          {data[current].icon && (
            <IconContainer>
              <Icon name="dollar-sign" size={64} color="#129d9f" />
            </IconContainer>
          )}

          <FlashcardTitle>{data[current].title}</FlashcardTitle>
          <FlashcardText>{data[current].text}</FlashcardText>

          {data[current].button && (
            <FlashcardButton
              onPress={() => navigation.navigate('Investments')}
              style={{ backgroundColor: '#129d9f' }}
            >
              <FlashcardButtonText>Saber Mais</FlashcardButtonText>
            </FlashcardButton>
          )}
        </Flashcard>
      </Carousel>
    </Container>
  );
};

export default InvestmentStyles;
