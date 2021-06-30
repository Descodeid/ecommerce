import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCart} from '../../assets';
import {SearchInput, TransactionTabSection} from '../../components';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.searchHeader}>
          <SearchInput />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Cart')}>
            <View style={styles.badge}>
              <Text style={styles.count}>2</Text>
            </View>
            <IcCart />
          </TouchableOpacity>
        </View>
      </View>
      <TransactionTabSection />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
  },
  header: {
    height: normalize(76, 'height'),
    backgroundColor: '#4584FF',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(36),
  },
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
