import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import normalize from 'react-native-normalize';
import {Gap} from '../../atoms';

const IntroSliderItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Gap height={8} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default IntroSliderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.8,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(64),
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(20),
    color: '#2D3436',
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#2D3436',
    textAlign: 'center',
  },
});
