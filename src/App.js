import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from '../src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <RegisterScreen /> */}
    </NavigationContainer>
  );
};

export default App;
