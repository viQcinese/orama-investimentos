import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import InvestmentTypes from '../pages/InvestmentTypes';
import Investments from '../pages/Investments';
import Favorites from '../pages/Favorites';

import AppRoutes from './app.routes'

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const placeholder = 5;
  return (
  <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: 'beside-icon',
          activeTintColor: '#3d5198',
          labelStyle: {
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: '500',
          },
          inactiveTintColor: '#c2c8db',
        }}
      >
        <Tab.Screen
          name="Investir"
          component={AppRoutes}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={24} name="dollar-sign" color={color} />
            )
          }}

        />
        <Tab.Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={24} name="heart" color={color} />
            ),
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoutes;
