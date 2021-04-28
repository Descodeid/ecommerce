import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D55B4',
    paddingVertical: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    fontFamily: 'OpensSans-Bold',
    fontSize: normalize(18),
    color: 'white',
  },
});
