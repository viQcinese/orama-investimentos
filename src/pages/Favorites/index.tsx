import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import api from './api.json';

import Flashcard from './components/Flashcard';

import { Container } from './styles';

const InvestmentStyles: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const favoritesJson = await AsyncStorage.getItem('@orama_favorites');
        if (
          favoritesJson !== null
          && JSON.parse(favoritesJson).length % 2 !== 0
        ) {
          setData([...JSON.parse(favoritesJson), { isVisible: false }]);
        } else {
          setData(JSON.parse(favoritesJson));
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [data]);

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          renderItem={({ item }) => {
            if (item.isVisible === false) {
              return (
                <Flashcard
                  expectedGains={item.expectedGains}
                  minInvest={item.minInvest}
                  type={item.investmentType}
                  risk={item.risk}
                  isVisible={false}
                />
              );
            }
            return (
              <Flashcard
                expectedGains={item.expectedGains}
                minInvest={item.minInvest}
                type={item.investmentType}
                risk={item.risk}
                isVisible
              />
            );
          }}
        />
      </SafeAreaView>
    </Container>
  );
};

export default InvestmentStyles;
