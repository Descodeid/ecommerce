import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tambah ke Keranjang</Text>
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
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    color: '#FFFFFF',
  },
});
