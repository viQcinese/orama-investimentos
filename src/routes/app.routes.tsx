import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InvestmentTypes from '../pages/InvestmentTypes';
import Investments from '../pages/Investments';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="InvestmentTypes"
    screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#f5f5f5',
      headerStyle: { height: 56 },
    }}
  >
    <App.Screen
      name="InvestmentTypes"
      component={InvestmentTypes}
      options={{
        title: 'Fundos',
      }}
    />
    <App.Screen
      name="Investments"
      component={Investments}
      options={{
        title: 'Investimentos',
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
