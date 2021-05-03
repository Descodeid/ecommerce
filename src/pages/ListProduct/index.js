import React from 'react';
import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Gap, Header, ProductTabSection, SearchInput} from '../../components';

const ListProduct = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        text="List Produk"
        type="cart"
        onPress={() => navigation.goBack()}
      />
      <Gap height={6} />
      <View style={styles.searchHeader}>
        <SearchInput color="#EFEFEF" width="100%" />
      </View>
      <Gap height={12} />
      <ProductTabSection />
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchHeader: {
    paddingHorizontal: normalize(15),
  },
});
