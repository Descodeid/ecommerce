import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from '../src/router';
import Bantuan from './pages/Bantuan'
import TerimaKasih from './pages/TerimaKasih';

const App = () => {
  return (
    <NavigationContainer>
      <Bantuan />
      {/* <TerimaKasih /> */}
    </NavigationContainer>
  );
};

export default App;
