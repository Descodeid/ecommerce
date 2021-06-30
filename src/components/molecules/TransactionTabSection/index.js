import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ListTransaction} from '..';

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

const Selesai = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListTransaction
            type="Selesai"
            text="Selesai"
            invoice="INV/20210413/MPL1169511603"
            qty="1"
            total="25000"
            onPress={() => navigation.navigate('DetailTransaction')}
          />
          <ListTransaction
            type="Selesai"
            text="Selesai"
            invoice="INV/20210413/MPL1169511603"
            qty="1"
            total="25000"
          />
          <ListTransaction
            type="Selesai"
            text="Selesai"
            invoice="INV/20210413/MPL1169511603"
            qty="1"
            total="25000"
          />
        </View>
      </ScrollView>
    </>
  );
};

const Proses = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListTransaction
            type="Proses"
            badgeColor="#D0FFF2"
            color="#0ECDA8"
            text="Dikirim"
            invoice="INV/20210413/MPL1169511603"
            qty="1"
            total="25000"
          />
        </View>
      </ScrollView>
    </>
  );
};

const Batal = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListTransaction
            type="Proses"
            badgeColor="#FFE4E3"
            color="#FF7675"
            text="Dibatalkan"
            invoice="INV/20210413/MPL1169511603"
            qty="1"
            total="25000"
          />
        </View>
      </ScrollView>
    </>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const TransactionTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Selesai (5)'},
    {key: '2', title: 'Proses (2)'},
    {key: '3', title: 'Dibatalkan (1)'},
  ]);

  const renderScene = SceneMap({
    1: Selesai,
    2: Proses,
    3: Batal,
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

export default TransactionTabSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    paddingTop: 5,
  },
  tabContainer: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: '#4584FF',
    height: 3,
  },
  background: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  text: focused => ({
    fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
    fontSize: normalize(14),
    color: focused ? '#4584FF' : '#3D3D3D',
    width: normalize(105),
    textAlign: 'center',
  }),
  backgroundColor: {
    backgroundColor: '#FFFFFF',
  },
});
