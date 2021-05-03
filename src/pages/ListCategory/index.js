import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Gap, Header, ListProduct, SearchInput} from '../../components';

const ListCategory = ({navigation, route}) => {
  return (
    <View style={styles.page}>
      <Header
        text={'Kategori ' + route.params}
        type="cart"
        onPress={() => navigation.goBack()}
      />
      <Gap height={6} />
      <View style={styles.searchHeader}>
        <SearchInput color="#EFEFEF" width="100%" />
      </View>
      <Gap height={12} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListProduct onPress={() => navigation.navigate('ProductDetail')} />
          <ListProduct onPress={() => navigation.navigate('ProductDetail')} />
          <ListProduct onPress={() => navigation.navigate('ProductDetail')} />
          <ListProduct onPress={() => navigation.navigate('ProductDetail')} />
          <ListProduct onPress={() => navigation.navigate('ProductDetail')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchHeader: {
    paddingHorizontal: normalize(15),
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(24),
  },
});
