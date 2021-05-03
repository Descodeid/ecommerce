import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ListProduct} from '..';
import {IcClockBlue} from '../../../assets';
import {Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicatorStyle}
      style={styles.background}
      tabStyle={styles.tabStyle}
      renderLabel={({route, focused}) => (
        <Text style={styles.text(focused)}>{route.title}</Text>
      )}
    />
  );
};

const Semuanya = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.expired}>
        <IcClockBlue />
        <Gap width={15} />
        <Text>Berlaku sampai 22 April</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListProduct
            type="diskon"
            onPress={() => navigation.navigate('ProductDetail', 'diskon')}
          />
          <ListProduct
            type="diskon"
            onPress={() => navigation.navigate('ProductDetail', 'diskon')}
          />
          <ListProduct
            type="diskon"
            onPress={() => navigation.navigate('ProductDetail', 'diskon')}
          />
          <ListProduct
            type="diskon"
            onPress={() => navigation.navigate('ProductDetail', 'diskon')}
          />
          <ListProduct
            type="diskon"
            onPress={() => navigation.navigate('ProductDetail', 'diskon')}
          />
        </View>
      </ScrollView>
    </>
  );
};

const Popular = () => {
  return (
    <>
      <View style={styles.expired}>
        <IcClockBlue />
        <Gap width={15} />
        <Text>Berlaku sampai 22 April</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
        </View>
      </ScrollView>
    </>
  );
};

const Recommended = () => {
  return (
    <>
      <View style={styles.expired}>
        <IcClockBlue />
        <Gap width={15} />
        <Text>Berlaku sampai 22 April</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
          <ListProduct type="diskon" />
        </View>
      </ScrollView>
    </>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const DiscountTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Semuanya'},
    {key: '2', title: 'Produk1'},
    {key: '3', title: 'Produk2'},
    {key: '4', title: 'Produk2'},
    {key: '5', title: 'Produk2'},
    {key: '6', title: 'Produk2'},
  ]);

  const renderScene = SceneMap({
    1: Semuanya,
    2: Popular,
    3: Recommended,
    4: Recommended,
    5: Recommended,
    6: Recommended,
  });
  return (
    <View style={styles.tabContainer}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.backgroundColor}
      />
    </View>
  );
};

export default DiscountTabSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(24),
  },
  tabContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  indicatorStyle: {
    backgroundColor: '#4584FF',
    height: 3,
    width: '0.15%',
  },
  background: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {
    width: 'auto',
  },
  text: focused => ({
    fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
    fontSize: normalize(14),
    color: focused ? '#4584FF' : '#3D3D3D',
    width: normalize(67),
    textAlign: 'center',
  }),
  backgroundColor: {
    backgroundColor: '#FFFFFF',
  },
  expired: {
    marginTop: normalize(31),
    marginHorizontal: normalize(15),
    backgroundColor: '#F0F8FF',
    flexDirection: 'row',
    padding: normalize(12),
    borderRadius: normalize(5),
  },
});
