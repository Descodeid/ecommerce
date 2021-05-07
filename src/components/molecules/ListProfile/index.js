import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowRightBlack} from '../../../assets';
import {Gap} from '../../atoms';

const ListProfile = ({text, icon, color = '#EFEFEF', onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.border(color)}>{icon}</View>
        <Gap width={13} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <IcArrowRightBlack />
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: normalize(15),
    paddingRight: normalize(22.5),
    paddingVertical: normalize(20),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: color => ({
    width: normalize(35),
    height: normalize(35),
    borderRadius: normalize(35),
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
});
