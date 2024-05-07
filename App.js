import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import colors from './src/styles/colors';
import CryptoScreen from './src/screens/TermsCondition/CryptoScreen';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.white,
        }}>
        <StatusBar barStyle="dark-content" />
        <CryptoScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
