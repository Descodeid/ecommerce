import React from 'react';
import {StyleSheet, TextInput as TextInputRN} from 'react-native';
import normalize from 'react-native-normalize';

const TextInput = ({placeholder}) => {
  return (
    <TextInputRN
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A3A3A3"
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#818181',
    paddingLeft: normalize(12),
    paddingVertical: normalize(8),
  },
});
