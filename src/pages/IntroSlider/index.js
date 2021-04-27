import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet, View, Animated} from 'react-native';
import Sliders from '../../assets/JSON/Sliders';
import {
  Gap,
  IntroSliderButton,
  IntroSliderItem,
  IntroSliderPagination,
} from '../../components';

const IntroSlider = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidersRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < Sliders.length - 1) {
      slidersRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace('MainApp');
    }
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <FlatList
          data={Sliders}
          renderItem={({item}) => <IntroSliderItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidersRef}
        />
      </View>
      <IntroSliderPagination data={Sliders} scrollX={scrollX} />
      <IntroSliderButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / Sliders.length)}
      />
      <Gap height={30} />
    </View>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 3,
  },
});
