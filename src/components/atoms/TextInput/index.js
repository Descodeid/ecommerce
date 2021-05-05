import React from 'react';
import {StyleSheet, TextInput as TextInputRN} from 'react-native';
import normalize from 'react-native-normalize';

const TextInput = ({placeholder, secureTextEntry}) => {
  return (
    <TextInputRN
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#3D3D3D"
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    backgroundColor: '#E9F0FF',
    paddingLeft: normalize(20),
    paddingVertical: normalize(16.5),
    borderRadius: normalize(8),
    color: '#3D3D3D',
  },
});
