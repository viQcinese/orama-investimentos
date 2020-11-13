import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import InvestmentTypes from '../pages/InvestmentTypes';
import Investments from '../pages/Investments';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      initialRouteName="InvestmentTypes"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: '#3d5198',
        headerStyle: { height: 56 },
      }}
    >
      <App.Screen
        name="InvestmentTypes"
        component={InvestmentTypes}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: 'Fundos',
          headerTintColor: '#3d5198',
        }}
      />
      <App.Screen
        name="Investments"
        component={Investments}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: 'Investimentos',
        }}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
