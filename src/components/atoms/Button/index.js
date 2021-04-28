import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const Button = ({text, fontSize = 12}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text(fontSize)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4584FF',
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(12),
  },
  text: fontSize => ({
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(fontSize),
    color: '#FFFFFF',
  }),
});
