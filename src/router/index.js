import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Cart,
  Home,
  IntroSlider,
  ListCategory,
  ListProduct,
  ListProductDiscount,
  Login,
  ProductDetail,
  Profile,
  Register,
  SplashScreen,
} from '../pages';
import {BottomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaksi" component={Home} />
      <Tab.Screen name="Al-Qur'an" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroSlider"
        component={IntroSlider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListProductDiscount"
        component={ListProductDiscount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListCategory"
        component={ListCategory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
