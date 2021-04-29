import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Router from '../src/router';
// import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <NavigationContainer>
      {/* <Bantuan /> */}
      {/* <Register /> */}
      <Login />
    </NavigationContainer>
  );
};

export default App;
