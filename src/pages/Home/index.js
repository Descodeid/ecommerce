import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  IcCart,
} from '../../assets';
import Banner from '../../assets/JSON/Banner';
import {Gap, Product, SearchInput} from '../../components';

const Home = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidersRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.searchHeader}>
          <SearchInput />
          <IcCart />
        </View>
      </View>
      <ScrollView>
        <View style={styles.curve}>
          <Gap height={20} />
          <Text style={styles.promo}>Ambil Promo Disini</Text>
          <Gap height={8} />
          <View style={styles.banner}>
            <FlatList
              data={Banner}
              renderItem={({item}) => (
                <View style={styles.imageContainer(currentIndex)}>
                  <Image source={item.image} />
                </View>
              )}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              snapToInterval={width * 0.58}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidersRef}
            />
            <View style={styles.container}>
              {Banner.map((_, i) => {
                const inputRange = [
                  (i - 1) * (width * 0.58),
                  i * (width * 0.58),
                  (i + 1) * (width * 0.58),
                ];
                const dotWidth = scrollX.interpolate({
                  inputRange,
                  outputRange: [7, 18, 7],
                  extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.3, 1, 0.3],
                });
                return (
                  <Animated.View
                    style={[styles.dot, {width: dotWidth, opacity}]}
                    key={i.toString()}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <Gap height={101} />
        <View style={styles.containerCategory}>
          <Text style={styles.label}>Kategori</Text>
          <View style={styles.category}>
            <View style={styles.content}>
              <View style={styles.card}>
                <Image source={Category1} />
              </View>
              <Text style={styles.textCategory}>Fashion</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.card}>
                <Image source={Category2} />
              </View>
              <Text style={styles.textCategory}>Elektronik</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.card}>
                <Image source={Category3} />
              </View>
              <Text style={styles.textCategory}>Dapur</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.card}>
                <Image source={Category4} />
              </View>
              <Text style={styles.textCategory}>Gaming</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.card}>
                <Image source={Category5} />
              </View>
              <Text style={styles.textCategory}>Laptop</Text>
            </View>
          </View>
        </View>
        <Gap height={32} />
        <Product
          title="Produk"
          discount="Diskon"
          type="diskon"
          onPress={() => navigation.navigate('ProductDetail', 'diskon')}
        />
        <Gap height={20} />
        <Product
          title="Rekomendasi untuk Anda"
          type="normal"
          onPress={() => navigation.navigate('ProductDetail', 'normal')}
        />
        <Gap height={80} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: normalize(76, 'height'),
    backgroundColor: '#4584FF',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(36),
  },
  curve: {
    height: normalize(90, 'height'),
    backgroundColor: '#4584FF',
    borderBottomLeftRadius: normalize(15),
    borderBottomRightRadius: normalize(15),
  },
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  banner: {
    height: normalize(150),
  },
  imageContainer: currentIndex => ({
    marginRight: currentIndex !== 0 ? normalize(15) : 0,
    marginLeft: currentIndex === 0 ? normalize(15) : 0,
  }),
  promo: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(16),
    color: '#FFFFFF',
    paddingHorizontal: normalize(15),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: normalize(8),
    borderRadius: normalize(8),
    backgroundColor: '#4584FF',
    marginHorizontal: normalize(8),
  },
  containerCategory: {
    paddingHorizontal: normalize(15),
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  content: {
    alignItems: 'center',
  },
  card: {
    width: normalize(57),
    height: normalize(57),
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(5),
    marginTop: normalize(13),
    marginBottom: normalize(8),
    elevation: 3,
  },
  textCategory: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(12),
    color: '#000000',
  },
});
