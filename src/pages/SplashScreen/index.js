import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILLogo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnimation, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnimation, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnimation, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      navigation.replace('IntroSlider');
    }, 4000);
  }, [moveAnimation, fadeAnimation, navigation]);
  return (
    <View style={styles.page}>
      <Animated.Image
        source={ILLogo}
        style={[styles.image, {opacity: fadeAnimation}]}
      />
      <Gap height={12} />
      <Animated.View style={{marginLeft: moveAnimation}}>
        <Animated.Text style={[styles.title]}>Gitri Jaya</Animated.Text>
        <Animated.Text style={[styles.tagline, {opacity: fadeAnimation}]}>
          Bags’s Collection
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(120),
    height: normalize(120),
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(20),
    color: '#000000',
    textAlign: 'center',
  },
  tagline: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(18),
    color: '#000000',
  },
});
