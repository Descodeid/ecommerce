import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ListProduct} from '..';
import {IcClock} from '../../../assets';
import {Gap} from '../../atoms';

const Product = ({title, discount, type, onPress}) => {
  return (
    <View>
      <View style={styles.containerLabel}>
        <View style={styles.left}>
          <Text style={styles.label}>{title}</Text>
          <Gap width={5} />
          <Text style={styles.diskon}>{discount}</Text>
        </View>
        <View>
          <Text style={styles.selengkapnya}>Selengkapnya</Text>
        </View>
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.list}>
            <ListProduct type={type} onPress={onPress} />
            <ListProduct type={type} onPress={onPress} />
            <ListProduct type={type} onPress={onPress} />
          </View>
        </ScrollView>
      )}
      {type === 'normal' && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.list}>
            <ListProduct type={type} onPress={onPress} />
            <ListProduct type={type} onPress={onPress} />
            <ListProduct type={type} onPress={onPress} />
          </View>
          <Gap height={15} />
        </ScrollView>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
  },
  containerLabel: {
    flexDirection: 'row',
    paddingHorizontal: normalize(15),
    justifyContent: 'space-between',
  },
  left: {
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
  selengkapnya: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#4584FF',
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
    marginRight: normalize(15),
  },
});
