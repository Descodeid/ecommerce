import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcDot, IcStar, Product1} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const ListProduct = ({type, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Image source={Product1} />
      </TouchableOpacity>
      <Gap height={8} />
      <Text style={styles.title}>Nike Savaleos</Text>
      <Gap height={4} />
      <View style={styles.containerPrice}>
        <Text style={styles.price}>Rp 799.000</Text>
        {type === 'diskon' && (
          <Text style={styles.priceDiscount}>Rp 900.000</Text>
        )}
      </View>
      <Gap height={14} />
      <View style={styles.feedback}>
        <IcStar />
        <Gap width={4} />
        <Text style={styles.rating}>4.8</Text>
        <Gap width={7} />
        <Image source={IcDot} />
        <Gap width={7} />
        <Text style={styles.text}>Terjual 10</Text>
        <Gap width={14} />
      </View>
      <View style={styles.button}>
        <Button
          text="Tambah ke Keranjang"
          borderRadius={10}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      {type === 'diskon' && (
        <>
          <View style={styles.discount}>
            <Text style={styles.textDiscount}>-50 %</Text>
          </View>
          <View style={styles.circle} />
          <View style={styles.circle2} />
        </>
      )}
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    width: normalize(163),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(5),
    marginRight: normalize(15),
    marginVertical: normalize(15),
    elevation: 2,
  },
  containerPrice: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
    paddingHorizontal: normalize(9),
  },
  price: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#3D3D3D',
    paddingHorizontal: normalize(13),
  },
  priceDiscount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#747474',
    paddingHorizontal: normalize(13),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  feedback: {
    paddingHorizontal: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  dot: {
    height: normalize(8),
    borderRadius: normalize(8),
    backgroundColor: '#747474',
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  button: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(13),
  },
  discount: {
    backgroundColor: 'rgba(255, 118, 117, 0.3)',
    position: 'absolute',
    top: normalize(8),
    left: normalize(10),
    paddingHorizontal: normalize(6),
    paddingVertical: normalize(2),
    borderRadius: normalize(4),
  },
  textDiscount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#FF7675',
  },
  circle: {
    width: normalize(6.3),
    height: normalize(7),
    position: 'absolute',
    top: normalize(12.3),
    left: normalize(7),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
  },
  circle2: {
    width: normalize(6.3),
    height: normalize(7),
    position: 'absolute',
    top: normalize(12.3),
    left: normalize(42),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
  },
});
