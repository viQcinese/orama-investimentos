import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{ backgroundColor: '#dcf5fe', flex: 1 }}>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />

    <Routes />
  </View>
);

export default App;
