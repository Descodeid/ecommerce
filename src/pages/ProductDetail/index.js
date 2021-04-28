import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import Detail from '../../assets/JSON/ProductDetail';
import {Button, Gap, Header} from '../../components';

const {width, height} = Dimensions.get('screen');
const IMAGE_SIZE = 80;
const SPACING = 10;

const ProductDetail = ({navigation, route}) => {
  const topRef = useRef(null);
  const thumbRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [size] = useState([40, 41, 42, 43]);
  const [activeSize, setActiveSize] = useState('');
  const type = route.params;

  const scrollToActiveIndex = index => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const renderShoesSizes = () => {
    return size.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.buttonSize(size[index], activeSize)}
          onPress={() => setActiveSize(item)}>
          <Text style={styles.number(size[index], activeSize)}>{item}</Text>
        </TouchableOpacity>
      );
    });
  };

  const Description = ({children}) => {
    const [collapse, setCollapse] = useState(true);
    const text = children;

    const resultString = collapse ? text.slice(0, 100) : text;

    return (
      <>
        <Text style={styles.desc}>{resultString}</Text>
        <Gap height={8} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCollapse(!collapse)}>
          <Text style={styles.more}>
            {collapse ? 'Selengkapnya' : 'Sembunyikan'}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.page}>
      <Header text="Detail Produk" onPress={() => navigation.goBack()} />
      <View style={styles.containerCarousel}>
        <FlatList
          data={Detail}
          renderItem={({item}) => {
            return <Image source={item.image} style={styles.imagesContainer} />;
          }}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={topRef}
        />
        <FlatList
          ref={thumbRef}
          data={Detail}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnail}
          contentContainerStyle={{paddingVertical: SPACING}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                <Image
                  source={item.image}
                  style={styles.images(activeIndex, index)}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          {type === 'diskon' && (
            <>
              <View style={styles.discount}>
                <Text style={styles.textDiscount}>-50 %</Text>
              </View>
              <View style={styles.circle} />
              <View style={styles.circle2} />
              <Gap height={10} />
            </>
          )}
          {type === 'normal' && <Gap height={0} />}
          <Text style={styles.name}>Nike Air Max</Text>
          <Gap height={5} />
          <View style={styles.containerPrice}>
            <Text style={styles.price}>Rp. 850.000</Text>
            {type === 'diskon' && (
              <Text style={styles.priceDiscount}>Rp 1.700.000</Text>
            )}
          </View>
        </View>
        <Gap height={5} />
        <View style={styles.containerSize}>
          <Text style={styles.label}>Pilih Ukuran :</Text>
          <View style={styles.size}>{renderShoesSizes()}</View>
        </View>
        <Gap height={5} />
        <View style={styles.containerDesc}>
          <Text style={styles.labelDesc}>Deskripsi</Text>
          <Gap height={8} />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            congue erat, ac suscipit sem. Curabitur accumsan consectetur velit,
            non gravida nibh. Nam at bibendum urna. Maecenas tincidunt sem ut
            arcu tempor, ut auctor magna eleifend. Vivamus eget porttitor urna,
            a facilisis justo. Etiam ut ante placerat, malesuada dui sit amet,
            auctor est. Nulla facilisi. Donec blandit neque vel sollicitudin
            dapibus. Donec efficitur et erat vel accumsan. Aliquam ultricies
            lectus et massa ullamcorper iaculis. Vivamus eu neque magna.
          </Description>
        </View>
        <Gap height={5} />
        <View style={styles.containerInfo}>
          <Text style={styles.labelDesc}>Info Barang</Text>
          <Gap height={8} />
          <View style={styles.info}>
            <View style={styles.left}>
              <Text style={styles.textInfo}>Terjual 10</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.textInfo}>Stok Barang 20</Text>
            </View>
          </View>
        </View>
        <Gap height={70} />
      </ScrollView>
      <View style={styles.button}>
        <Button text="Tambah ke Keranjang" fontSize={14} />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  containerCarousel: {
    height: height * 0.32,
  },
  containerTitle: {
    paddingHorizontal: normalize(15),
    backgroundColor: '#FFFFFF',
    paddingVertical: normalize(26),
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDesc: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(16),
  },
  containerInfo: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(16),
  },
  containerSize: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(10),
    paddingBottom: normalize(16),
  },
  size: {
    flexDirection: 'row',
  },
  imagesContainer: {
    width: width,
    height: height * 0.32,
  },
  thumbnail: {
    position: 'absolute',
    right: SPACING,
  },
  images: (activeIndex, index) => ({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: normalize(12),
    marginBottom: SPACING,
    borderWidth: normalize(3),
    borderColor: activeIndex === index ? '#FFFFFF' : 'transparent',
  }),
  name: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#000000',
  },
  price: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(16),
    color: '#000000',
  },
  priceDiscount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#747474',
    paddingHorizontal: normalize(23),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  label: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#6F7985',
  },
  labelDesc: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  desc: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#31333F',
    lineHeight: normalize(19),
    letterSpacing: 0.5,
    textAlign: 'justify',
  },
  more: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#4584FF',
  },
  buttonSize: (size, activeSize) => ({
    width: normalize(45, 'width'),
    height: normalize(33, 'height'),
    backgroundColor: size === activeSize ? '#4584FF' : null,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: size === activeSize ? 'transparent' : '#747474',
    borderRadius: normalize(8),
    marginRight: normalize(15),
    marginTop: normalize(10),
  }),
  number: (size, activeSize) => ({
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: size === activeSize ? '#FFFFFF' : '#3D3D3D',
  }),
  info: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  textInfo: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
  },
  button: {
    width: '93%',
    position: 'absolute',
    bottom: normalize(15),
    left: normalize(15),
  },
  discount: {
    backgroundColor: 'rgba(255, 118, 117, 0.3)',
    position: 'absolute',
    top: normalize(15),
    left: normalize(15),
    paddingHorizontal: normalize(6),
    paddingVertical: normalize(2),
    borderRadius: normalize(4),
    zIndex: 1,
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
    top: normalize(18),
    left: normalize(12),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  circle2: {
    width: normalize(6.3),
    height: normalize(7),
    position: 'absolute',
    top: normalize(18),
    left: normalize(47),
    borderRadius: normalize(7),
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
});
