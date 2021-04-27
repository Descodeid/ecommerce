import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ListProduct} from '..';
import {IcClock} from '../../../assets';
import {Gap} from '../../atoms';

const Product = ({title, discount, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{title}</Text>
        <Gap width={5} />
        <Text style={styles.diskon}>{discount}</Text>
      </View>
      <Gap height={6} />
      {discount && (
        <View style={styles.expiredDiskon}>
          <IcClock />
          <Gap width={4} />
          <Text style={styles.text}>Berlaku sampai 22 April </Text>
        </View>
      )}
      <Gap height={13} />
      {type === 'diskon' && (
        <View style={styles.list}>
          <ListProduct type={type} />
          <ListProduct type={type} />
        </View>
      )}
      {type === 'normal' && (
        <View style={styles.list}>
          <ListProduct type={type} />
          <ListProduct type={type} />
        </View>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(15),
  },
  containerLabel: {
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  diskon: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#FF7675',
  },
  expiredDiskon: {
    width: normalize(180),
    backgroundColor: '#F0F7FF',
    flexDirection: 'row',
    borderRadius: normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(7),
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#747474',
    paddingHorizontal: normalize(9),
  },
  list: {
    flexDirection: 'row',
  },
});
