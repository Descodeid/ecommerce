import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DiscountTabSection, Header} from '../../components';

const ListProductDiscount = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        text="Produk Diskon"
        type="cart"
        onPress={() => navigation.goBack()}
      />
      <DiscountTabSection />
    </View>
  );
};

export default ListProductDiscount;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
