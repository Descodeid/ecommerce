import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from './src/components';
import {IcCheck} from './src/assets';

const {width, height} = Dimensions.get('screen');

const API_KEY = '563492ad6f917000010000018f82d506a36049d9902ca699d6af84fd';
const API_URL =
  'https://api.pexels.com/v1/search?query=bag&orientation=landscape&size=small&per_page=3';
const IMAGE_SIZE = 80;
const SPACING = 10;

const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const {photos} = await data.json();

  return photos;
};

const App = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetchImagesFromPexels();
      setImages(data);
    };
    fetchImages();
  }, []);

  const topRef = useRef();
  const thumbRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [size] = useState([11, 12, 13]);
  const [color] = useState(['#E85858', '#6096D3', '#679340', '#C5D0DB']);
  const [activeSize, setActiveSize] = useState('');
  const [activeColor, setActiveColor] = useState('');

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

  // if (!images) {
  //   return <Text>Loading...</Text>;
  // }

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

  const renderShoesColors = () => {
    return color.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.buttonColor(item)}
          onPress={() => setActiveColor(item)}>
          {item === activeColor && <Image source={IcCheck} />}
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.containerCarousel}>
        <FlatList
          ref={topRef}
          data={images}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={ev => {
            scrollToActiveIndex(
              Math.floor(ev.nativeEvent.contentOffset.x / width),
            );
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.imagesContainer}>
                <Image
                  source={{uri: item.src.landscape}}
                  style={[StyleSheet.absoluteFillObject]}
                />
              </View>
            );
          }}
        />
        <FlatList
          ref={thumbRef}
          data={images}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnail}
          contentContainerStyle={{paddingVertical: SPACING}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                <Image
                  source={{uri: item.src.landscape}}
                  style={styles.images(activeIndex, index)}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Gap height={18} />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <View>
            <Text style={styles.name}>Nike Air Max</Text>
            <Text style={styles.brand}>by Nike</Text>
          </View>
          <Text style={styles.price}>$169</Text>
        </View>
        <Gap height={20} />
        <View style={styles.containerDesc}>
          <Text style={styles.desc}>
            Embrace the past, present and future of Nike innovation and
            technology with men's Air Max shoes from Nike.com.
          </Text>
        </View>
        <Gap height={19} />
        <View style={styles.line} />
        <Gap height={24} />
        <View>
          <Text style={styles.label}>Sizes</Text>
          <View style={styles.containerSize}>{renderShoesSizes()}</View>
        </View>
        <Gap height={24} />
        <View>
          <Text style={styles.label}>Colors</Text>
          <View style={styles.containerSize}>{renderShoesColors()}</View>
        </View>
        <Gap height={52} />
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add to bag</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginHorizontal: 20,
  },
  containerCarousel: {
    height: height * 0.32,
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerDesc: {
    paddingRight: 22,
  },
  containerSize: {
    flexDirection: 'row',
  },
  imagesContainer: {
    width: width,
    height: height * 0.31,
  },
  thumbnail: {
    position: 'absolute',
    right: SPACING,
  },
  images: (activeIndex, index) => ({
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 12,
    marginBottom: SPACING,
    borderWidth: 2,
    borderColor: activeIndex === index ? '#FFF' : 'transparent',
  }),
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#000000',
  },
  brand: {
    fontFamily: 'Inter-Medium',
    fontSize: 17,
    color: '#6F7985',
    opacity: 0.87,
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#000000',
  },
  desc: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#31333F',
    lineHeight: 22,
    letterSpacing: 0.408,
  },
  line: {
    width: 332,
    borderWidth: 1,
    borderColor: '#ECEEF1',
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 22,
    color: '#6F7985',
  },
  buttonSize: (size, activeSize) => ({
    width: 54,
    height: 54,
    backgroundColor: size === activeSize ? '#6096D3' : null,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6096D3',
    borderRadius: 12,
    marginRight: 10,
    marginTop: 8,
  }),
  number: (size, activeSize) => ({
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: size === activeSize ? '#FFFFFF' : '#6096D3',
  }),
  buttonColor: item => ({
    width: 40,
    height: 40,
    backgroundColor: item,
    borderRadius: 40 / 2,
    marginRight: 12,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  button: {
    backgroundColor: '#4685CB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 14,
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
