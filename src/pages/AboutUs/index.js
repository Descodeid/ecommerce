import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Header} from '../../components';

const AboutUs = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Tentang Perusahaan" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut a ut
          rutrum scelerisque pharetra. Eu donec id dignissim ut at. Gravida
          posuere sit enim sed orci aliquam ut. Nam amet, vitae ut a sit. Sit
          nunc elementum interdum netus euismod egestas vel. Nisl lacus,
          fermentum nulla feugiat dolor est non ac imperdiet. Nisl nisi, egestas
          ac commodo non massa pellentesque odio. Tellus sed pulvinar sit felis,
          laoreet malesuada odio lorem.
        </Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.text}>VISI & MISI</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.visi}>
          <View style={styles.dot} />
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi in lacus
            cursus amet nunc
          </Text>
        </View>
        <View style={styles.visi}>
          <View style={styles.dot} />
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi in lacus
            cursus amet nunc
          </Text>
        </View>
        <View style={styles.visi}>
          <View style={styles.dot} />
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi in lacus
            cursus amet nunc
          </Text>
        </View>
        <View style={styles.visi}>
          <View style={styles.dot} />
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi in lacus
            cursus amet nunc
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: normalize(20),
    paddingTop: normalize(16),
    paddingBottom: normalize(20),
  },
  desc: {
    fontFamily: 'OpenSans-Regular',
    fontSize: normalize(14),
    color: '#3D3D3D',
    lineHeight: normalize(19),
    textAlign: 'justify',
  },
  spacing: {
    backgroundColor: 'rgba(69, 132, 255, 0.2)',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(8),
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#4584FF',
  },
  visi: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    backgroundColor: '#4584FF',
    marginRight: normalize(10),
  },
});
