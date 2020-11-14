import React, { useRef, useState, useCallback } from 'react';
import { Animated, Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

import Graphic from '../../../../assets/graphic.png';

import {
  Container,
  Graphics,
  ButtonsContainer,
  Button,
  TextContainer,
  ExpectedGainsLabel,
  ExpectedGainsText,
  Type,
  MinInvestmentLabel,
  MinInvestmentText,
  RiskText,
  RiskAndTypeContainer,
  ExpectedAndMinContainer,
} from './styles';

interface IFlashcardProps {
  id: number;
  expectedGains: number;
  previousGains: number;
  minInvest: number;
  investmentType: string;
  risk: number;
}

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

const Flashcard: React.FC<IFlashcardProps> = ({
  id,
  expectedGains,
  previousGains,
  minInvest,
  investmentType,
  risk,
}) => {
  const [likeAnim, setLikeAnim] = useState({
    startValue: new Animated.Value(0),
    endValue: 500,
    duration: 500,
  });

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleLike = useCallback(async () => {
    Animated.timing(likeAnim.startValue, {
      toValue: likeAnim.endValue,
      duration: likeAnim.duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: likeAnim.duration,
      useNativeDriver: true,
    }).start();

    try {
      const favoritesJson = await AsyncStorage.getItem('@orama_favorites');
      const favorites = favoritesJson === null ? [] : JSON.parse(favoritesJson);

      let isUnique = true;

      favorites.forEach(e => {
        if (e.id === id) isUnique = false;
      });

      if (isUnique) {
        favorites.push({
          id,
          expectedGains,
          previousGains,
          minInvest,
          investmentType,
          risk,
        });
      }

      await AsyncStorage.setItem('@orama_favorites', JSON.stringify(favorites));

      // await AsyncStorage.removeItem('@orama_favorites');
    } catch (e) {
      console.log(e);
    }
  }, [
    likeAnim,
    fadeAnim,
    id,
    expectedGains,
    previousGains,
    minInvest,
    risk,
    investmentType,
  ]);

  const handleDislike = useCallback(() => {
    Animated.timing(likeAnim.startValue, {
      toValue: -likeAnim.endValue,
      duration: likeAnim.duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: likeAnim.duration,
      useNativeDriver: true,
    }).start();
  }, [likeAnim, fadeAnim]);

  return (
    <Animated.View
      id={id}
      style={{
        position: 'relative',
        transform: [{ translateX: likeAnim.startValue }],
        opacity: fadeAnim,
      }}
    >
      <Container>
        <View>
          <Graphics>
            <Image source={Graphic} />
          </Graphics>
          <TextContainer>
            <ExpectedAndMinContainer>
              <ExpectedGainsLabel>Projeção de rendimento:</ExpectedGainsLabel>
              <ExpectedGainsText>
                R$
                {expectedGains}
              </ExpectedGainsText>
              <MinInvestmentLabel>Investimento Minimo:</MinInvestmentLabel>
              <MinInvestmentText>
                R$
                {minInvest}
              </MinInvestmentText>
            </ExpectedAndMinContainer>

            <RiskAndTypeContainer>
              <RiskText risk={risk}>
                {' '}
                {riskText[risk]}
{' '}
Risco
{' '}
</RiskText>
              <Type>{investmentType}</Type>
            </RiskAndTypeContainer>
          </TextContainer>
        </View>
        <ButtonsContainer>
          <Button onPress={handleDislike}>
            <Icon name="remove" size={56} color="#FD635E" />
          </Button>
          <Button onPress={handleLike}>
            <Icon name="heart" size={48} color="#03D958" />
          </Button>
        </ButtonsContainer>
      </Container>
    </Animated.View>
  );
};

export default Flashcard;
