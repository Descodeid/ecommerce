import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowLeft, IcCartBlack} from '../../../assets';
import {Gap} from '../../atoms';

const Header = ({text, type, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <IcArrowLeft />
        </TouchableOpacity>
        <Gap width={15} />
        <Text style={styles.text}>{text}</Text>
      </View>
      {type === 'cart' && <IcCartBlack />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(22),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  left: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#000000',
  },
});
