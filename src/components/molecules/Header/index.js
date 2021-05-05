import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowLeft, IcCartBlack} from '../../../assets';
import {Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const Header = ({text, type, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <IcArrowLeft />
        </TouchableOpacity>
        <Gap width={15} />
        <Text style={styles.text}>{text}</Text>
      </View>
      {type === 'cart' && (
        <View TouchableOpacity activeOpacity={0.7}>
          <View style={styles.badge}>
            <Text style={styles.count}>2</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Cart')}>
            <IcCartBlack />
          </TouchableOpacity>
        </View>
      )}
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
  badge: {
    backgroundColor: '#FF2D2D',
    width: normalize(13),
    height: normalize(13),
    borderRadius: normalize(13 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: normalize(0),
    right: normalize(0),
    zIndex: 1,
  },
  count: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(10),
    color: '#FFFFFF',
  },
});
