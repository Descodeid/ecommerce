import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import {Gap} from '..';

const Button = ({
  text,
  fontSize = 12,
  backgroundColor = '#4584FF',
  color = '#FFFFFF',
  borderRadius = normalize(5),
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(backgroundColor, borderRadius)}
      onPress={onPress}>
      {icon}
      <Gap width={12} />
      <Text style={styles.text(fontSize, color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, borderRadius) => ({
    flexDirection: 'row',
    backgroundColor,
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(14),
  }),
  text: (fontSize, color) => ({
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(fontSize),
    color,
  }),
});
