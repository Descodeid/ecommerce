import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from '../src/router';
import {Register} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Router /> */}
      <Register />
    </NavigationContainer>
  );
};

export default App;
