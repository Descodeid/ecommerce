import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCartBlue} from '../../../assets';
import {Gap} from '../../atoms';
import {Number} from '../../../components';

const ListTransaction = ({
  invoice,
  qty,
  total,
  text,
  badgeColor = '#E9F0FF',
  color = '#4584FF',
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.detailContainer}>
          <View style={styles.detailContent}>
            <IcCartBlue />
            <Gap width={17} />
            <View>
              <Text style={styles.noInvoice}>{invoice}</Text>
              <Text style={styles.amount}>{qty} x Item</Text>
            </View>
          </View>
          <View style={styles.badge(badgeColor)}>
            <Text style={styles.textBadge(color)}>{text}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Gap height={8} />
        <View style={styles.totalContainer}>
          <Text style={styles.labelTotal}>Total Bayar</Text>
          <Number style={styles.valueTotal} number={total} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(15),
    marginBottom: normalize(5),
  },
  noInvoice: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(8),
  },
  detailContent: {
    flexDirection: 'row',
  },
  amount: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  badge: badgeColor => ({
    backgroundColor: badgeColor,
    borderRadius: normalize(7),
    height: normalize(22),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
  }),
  textBadge: color => ({
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: color,
  }),
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelTotal: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
  valueTotal: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    color: '#3D3D3D',
  },
});
